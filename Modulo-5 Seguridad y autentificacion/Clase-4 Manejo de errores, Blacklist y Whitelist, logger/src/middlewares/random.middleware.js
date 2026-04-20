/* 
Los middlewares reciben por paremtro la request, response y next proporcionada por express
    request => Manejar consulta
    response => Manejar respuesta
    next => es una funcion que indica que express puede pasar al siguiente controlador

Los middlewares no solo se limitan a hacer validaciones. Pueden servirnos para generar estados del servidor y transferirlos a los controladores
    */

import ServerError from "../helpers/serverError.helper.js"

function randomMiddleware(request, response, next) {
    try {
        const numero_random = Math.random() //Numero random entre 0 y 1
        if (numero_random > 0.5) {
            throw new ServerError('Tienes mala suerte', 400)
        }
        else {
            request.suerte = true
            request.nro_random = numero_random
            next()
        }
    }
    catch (error) {
        if (error instanceof ServerError) {
            response.status(error.status).send(
                {
                    ok: false,
                    status: error.status,
                    message: error.message
                }
            )
        }
        else {
            response.status(500).send(
                {
                    ok: false,
                    status: 500,
                    message: "Error interno del servidor"
                }
            )
        }
    }

}

export default randomMiddleware