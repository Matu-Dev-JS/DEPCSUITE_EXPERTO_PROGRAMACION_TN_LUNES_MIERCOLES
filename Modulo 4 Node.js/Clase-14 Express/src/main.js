import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'


connectMongoDB()

const app = express()


app.get('/api/status', (request, response) => {
    
/* 
las respuestas HTTP tienen un status, el status sirve para marcar rapidamente como fue la respuesta
Por ejemplo:
    Si no encuentro un recurso => 404
    Si todo salio bien => 200
    Se creo exitosamente => 201
    Consultaste incorrectamente => 400
    Desautorizado => 401
    No podes hacer esa accion (pero estas autentificado) => 403
    Fallo interno del servidor => 500
    ..ETC
*/

    response.status(200).send(
        {
            ok: true,
            message: "Api funcionando correctamente",
            status: 200
        }
    )
})

app.listen(ENVIRONMENT.PORT, () => {
    console.log(`El servidor se esta escuchando en el puerto ${ENVIRONMENT.PORT}`)
})
