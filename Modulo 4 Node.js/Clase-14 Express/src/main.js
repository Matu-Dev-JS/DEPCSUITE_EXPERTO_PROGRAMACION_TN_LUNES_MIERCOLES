import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'


connectMongoDB()

const app = express()


app.get('/api/status', (request, response) => {
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
