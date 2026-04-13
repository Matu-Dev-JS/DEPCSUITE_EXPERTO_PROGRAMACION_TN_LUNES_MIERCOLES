import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'
import statusRouter from "./routes/status.router.js";
import authRouter from "./routes/auth.router.js";
import missionRouter from "./routes/mission.router.js";
import mailTransporter from "./config/mail.config.js";


connectMongoDB()

const app = express()

/* 
Esto es un middleware global que se antepone a todos los controladores y revisa si el header "Content-Type" es "application/json"
*/
app.use(express.json({limit: '5gb'}))


/* 
Cualquier consulta sobre /api/status va a delegarse al statusRouter
*/
app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)
app.use('/api/missions', missionRouter)


app.listen(ENVIRONMENT.PORT, () => {
    console.log(`El servidor se esta escuchando en el puerto ${ENVIRONMENT.PORT}`)
})


