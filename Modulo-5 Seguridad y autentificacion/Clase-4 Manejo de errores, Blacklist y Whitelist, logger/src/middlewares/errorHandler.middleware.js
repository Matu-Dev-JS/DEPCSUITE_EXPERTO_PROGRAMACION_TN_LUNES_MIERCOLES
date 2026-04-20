import ServerError from "../helpers/serverError.helper.js"
import jwt from 'jsonwebtoken'

/* 
SI ocurre un error en la ejecucion del controlador, se lanzara el error y se pasara a este middleware
Dicho error sera pasado por parametro
El error sera manejado dentro del middleware, donde responderemos al usuario dependiendo del tipo de error
*/
function errorHandlerMiddleware (error, request, response, next){
    console.log("Ocurrio un ERROR")
    console.error(error)
    if(error instanceof ServerError){
        return response.status(error.status).json(
            {
                status: error.status,
                message: error.message,
                ok: false
            }
        )
    }

    if(error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError){
        return response.status(401).json({
            ok: false,
            status: 401,
            message: 'Token invalido o expirado'
        })
    }

    return response.status(500).json(
        {
            ok: false,
            status: 500,
            message: "Error interno del servidor"
        }
    )
}

export default errorHandlerMiddleware