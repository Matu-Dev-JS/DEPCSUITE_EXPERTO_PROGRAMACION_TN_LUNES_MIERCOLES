
import ENVIRONMENT from "../config/environment.config.js"
import ServerError from "../helpers/serverError.helper.js"
import userRepository from "../repository/user.repository.js"
import jwt from 'jsonwebtoken'

function authMiddleware(valid_roles = []) {
    return async function (request, response, next) {
        try {
            const { user_id } = request.params
            if (!user_id) {
                throw new ServerError('No has proporcionado el id de usuario', 400)
            }
            const user = await userRepository.findById(user_id)

            if (!user) {
                throw new ServerError('El usuario no existe', 404)
            }


            //Si hay roles validos pero el rol del usuario NO esta incluido dentro de ellos entonces tiramos error
            if (
                valid_roles.length > 0
                &&
                !(valid_roles.includes(user.role))
            ) {
                throw new ServerError('Usuario no tiene permisos para esta operacion', 403)
            }

            //Guardo el user dentro de la request (Para que controladores puedan acceder a quien hizo la consulta)
            request.user = user

            //Continuo al siguiente controlador
            next()

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
}

export function verifyAuthTokenMiddleware(valid_roles = []) {

    return function (request, response, next) {
        try {
            //request.headers es el objeto que guarda la lista de headers de la consulta
            //request.headers.authorization es donde esperamos recibir el token de autentificacion
            const auth_header = request.headers.authorization
            if (!auth_header) {
                throw new ServerError('Falta token de autentificacion', 401)
            }


            const auth_token = auth_header.split(' ')[1]
            if (!auth_token) {
                throw new ServerError('Falta token de autentificacion', 401)
            }

            //Verifico el token
            const user = jwt.verify(auth_token, ENVIRONMENT.JWT_SECRET_KEY)

            if(valid_roles.length > 0 && !valid_roles.includes(user.role)){
                throw new ServerError('No tienes los permisos suficientes', 403)
            }

            //Guardo la sesion del usuario en la request
            request.user = user
            console.log(user)
            next()
        }
        catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return response.status(401).json({
                    ok: false,
                    status: 401,
                    message: "Token invalido"
                })
            }
            else if (error instanceof ServerError) {
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
}

/*
Auth middleware de token VERSION SIMPLIFICADA (SIN ROLES)
export function verifyAuthTokenMiddleware (request, response, next){
    try{
        //request.headers es el objeto que guarda la lista de headers de la consulta
        //request.headers.authorization es donde esperamos recibir el token de autentificacion
        const auth_header = request.headers.authorization
        if(! auth_header){
            throw new ServerError('Falta token de autentificacion', 401)
        }


        const auth_token = auth_header.split(' ')[1]
        if(!auth_token){
            throw new ServerError('Falta token de autentificacion', 401)
        }

        //Verifico el token
        const user = jwt.verify(auth_token, ENVIRONMENT.JWT_SECRET_KEY)

        //Guardo la sesion del usuario en la request
        request.user = user

        next()
    }
    catch(error){
        if( error instanceof jwt.JsonWebTokenError){
            return response.status(401).json({
                ok: false,
                status: 401,
                message: "Token invalido"
            })
        }
        else if (error instanceof ServerError) {
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
 */

export default authMiddleware


