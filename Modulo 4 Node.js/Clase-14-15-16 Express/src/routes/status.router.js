import express from 'express'
import statusController from '../controllers/status.controller.js'
import randomMiddleware from '../middlewares/random.middleware.js'
import authMiddleware from '../middlewares/auth.middleware.js'


const statusRouter = express.Router()


/* 
las respuestas HTTP tienen un status, el status sirve para marcar rapidamente como fue la respuesta
Por ejemplo:
    
    OK: empiezan con 2
        Si todo salio bien => 200
        Se creo exitosamente => 201

    Fallo del cliente: Empiezan con 4
        Consultaste incorrectamente => 400
        Desautorizado => 401
        No podes hacer esa accion (pero estas autentificado) => 403
        Si no encuentro un recurso => 404

    Fallo del servidor: Empiezan con 5
        Fallo interno del servidor => 500
    ..ETC

    Algo importante a tener en cuenta es que el status HTTP lo seleccionan USTEDES, por ende recae en ustedes usarlo bien

*/

//Primero pasa por el random middleware donde se determina mi suerte
//Si tengo suerte pasara al metodo .get del statusController
statusRouter.get('/:user_id', authMiddleware(['premium']), statusController.get)

export default statusRouter