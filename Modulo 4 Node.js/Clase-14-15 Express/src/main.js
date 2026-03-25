import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'
import statusRouter from "./routes/status.router.js";
import authRouter from "./routes/auth.router.js";
import missionRouter from "./routes/mission.router.js";


connectMongoDB()

const app = express()

/* 
Esto es un middleware global que se antepone a todos los controladores y revisa si el body de la request esta en tipo JSON, en caso de serlo no transforma a objeto de JS
*/
app.use(express.json())


/* 
Cualquier consulta sobre /api/status va a delegarse al statusRouter
*/
app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)
app.use('/api/missions', missionRouter)


/* 
Desarrollar una API para gestionar misiones y tareas

/api/auth/login
    body: {
        email,
        password
    }
    
En caso de coincidir las credenciales daremos datos del usuario (como el id)


POST /api/missions/:user_id
    - Validar que el usuario exista

    body: {
        title,
        description
    }
    Crear una nueva mision

GET /api/mission/:user_id
    - Validar que el usuario exista

    Poder obtener todas las misiones de X usuario


//Tarea/Ejercitacion
GET /api/mission/:user_id/:mission_id
    - Validar que el usuario exista

    Poder traer el detalle de una mision

PUT /api/mission/:user_id/:mission_id
    - Validar que el usuario exista

    Actualizar una mision de x usuario por ID de mision

DELETE /api/mission/:user_id/:mission_id
    - Validar que el usuario exista

    Eliminar una mision de x usuario por ID de mision



Si sabemos que validar usuario es algo que vamos a hacer muchas veces me conviene plantearlo como middleware
El middleware es como un controlador pero que se antepone al controlador final
EJ: 
    validateUserMiddleware => Extraer dinero
    validateUserMiddleware => Depositar dinero
ValidateUserMiddleware es un middleware que configuraremos a nivel de ruta o endpoint, NO ES GLOBAL, no todos los endpoints necesitan validar si el usuario existe, por ejemplo login, logout
*/


app.listen(ENVIRONMENT.PORT, () => {
    console.log(`El servidor se esta escuchando en el puerto ${ENVIRONMENT.PORT}`)
})
