/* 
NO ES SEGURO AUN
Quiero que mi middleware valide si el user_id pasado por request.params es un user id valido, osea que corresponda a algun usuario de la aplicacion
En caso de existir debera guardar en request la informacion del usuario (sesion)
*/

import ServerError from "../helpers/serverError.helper.js"
import userRepository from "../repository/user.repository.js"

async function authMiddleware(request, response, next) {
    try {   
        const {user_id} = request.params
        if(!user_id){
            throw new ServerError('No has proporcionado el id de usuario', 400)
        }
        const user = await userRepository.findById(user_id)

        if(!user){
            throw new ServerError('El usuario no existe', 404)
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

export default authMiddleware