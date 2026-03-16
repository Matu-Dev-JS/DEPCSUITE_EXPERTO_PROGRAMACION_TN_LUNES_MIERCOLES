import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'
import statusRouter from "./routes/status.router.js";
import authRouter from "./routes/auth.router.js";


connectMongoDB()

const app = express()

app.use(express.json())


/* 
Cualquier consulta sobre /api/status va a delegarse al statusRouter
*/
app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)


/* 
Desarrollar una API para gestionar misiones y tareas

/api/auth/login
    body: {
        email,
        password
    }
    
En caso de coincidir las credenciales daremos datos del usuario (como el id)


*/


app.listen(ENVIRONMENT.PORT, () => {
    console.log(`El servidor se esta escuchando en el puerto ${ENVIRONMENT.PORT}`)
})
