import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'

import mailTransporter from "./config/mail.config.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware.js";
import cors from 'cors'
import ServerError from "./helpers/serverError.helper.js";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.config.js";

connectMongoDB()

const app = express()


//Si entran a la ruta de /docs se va a servir la pantalla de documentacion de swagger
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
)

/* 
Cors permite que otros dominios puedan hacer peticiones a mi servidor
*/
/* 
app.use(
    cors()
) 
*/

/* 
Permitir si no esta en la lista negra
*/
//Direcciones bloqueadas
/* const blockedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:5500'
]
app.use(
    cors({
        origin: (origin, callback) => {

            if (blockedOrigins.includes(origin)) {
                console.log('Se recibio una consulta de un dominio bloqueado:', origin)
                //la callback es quien toma la decision de si pasa o tira error
                //tiene 2 parametros: error, puede_pasar
                callback(new ServerError('Origen bloqueado', 403))
            }
            else {
                //Null porque NO hay error, true porque lo dejo pasar
                callback(null, true)
            }

        }
    })
) */

//whitelist
const allowedDomains = [
    'http://127.0.0.1:5500'
]
app.use(
    cors(
        {
            origin: (origin, callback) => {
                //Para probar con postman
                if (!origin && ENVIRONMENT.MODE === 'dev') {
                    callback(null, true)
                }
                else if (!allowedDomains.includes(origin)) {
                    callback(new ServerError('Origen desconocido', 403))
                }
                else {
                    callback(null, true)
                }
            }
        }
    )
)

const api_keys = [
    {
        value: 'pampa',
        client_id: 24
    }
]

app.use(
    (request, response, next) => {
        const apikey = request.headers['x-api-key']
        if(!apikey){
            throw new ServerError('Api key no proporcionada', 401)
        }
        for(let apikey_saved of api_keys){
            if(apikey === apikey_saved.value){

                return next()
            }
        }
        throw new ServerError('Api key invalida', 401)
    }
)

/* 
Configuracion el middleware de rateLimitter (limitar cantidad de consultas en un cierto periodo de tiempo)
Este middleware solo es efectivo en servidores con instancia duradera (idealmente 1 sola instancia). Osea servidores que queden prendidos 24/7 y que todo su trafico pase por alli.

En este caso estamos definiendo un lapso de 15 min de la primera consulta de un x cliente con una x apikey en la cual ese cliente tendra 15 min para hacer hasta 5 consultas. Si el cliente supera la cantidad se enviara un error "Too many request"

*/
//const RATE_LIMIT_MIN = 1
/* const limiter = rateLimit(
    {
        windowMs: RATE_LIMIT_MIN * 60 * 1000, //Tiempo de lapso a evaluar
        max: 5,
        keyGenerator: (request) => {
            const apikey = request.headers['x-api-key']
            return apikey
        }
    }
)

app.use(limiter)
 */



/* 
Esto es un middleware global que se antepone a todos los controladores y revisa si el header "Content-Type" es "application/json"
*/
app.use(express.json({ limit: '5gb' }))



import statusRouter from "./routes/status.router.js";
import authRouter from "./routes/auth.router.js";
import missionRouter from "./routes/mission.router.js";
/* 
Cualquier consulta sobre /api/status va a delegarse al statusRouter
*/
app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)
app.use('/api/missions', missionRouter)

//El middleware de errores como SE EJECUTA LUEGO DEL CONTROLADOR, DEBE IR AL FINAL
app.use(errorHandlerMiddleware)

app.listen(ENVIRONMENT.PORT, () => {
    console.log(`El servidor se esta escuchando en el puerto ${ENVIRONMENT.PORT}`)
})


