import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'
import statusRouter from "./routes/status.router.js";
import authRouter from "./routes/auth.router.js";
import missionRouter from "./routes/mission.router.js";
import mailTransporter from "./config/mail.config.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware.js";
import cors from 'cors'
import ServerError from "./helpers/serverError.helper.js";

connectMongoDB()

const app = express()

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


/* 
Esto es un middleware global que se antepone a todos los controladores y revisa si el header "Content-Type" es "application/json"
*/
app.use(express.json({ limit: '5gb' }))


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


