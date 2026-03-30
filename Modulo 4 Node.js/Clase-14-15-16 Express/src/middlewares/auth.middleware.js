/* 
NO ES SEGURO AUN
Quiero que mi middleware valide si el user_id pasado por request.params es un user id valido, osea que corresponda a algun usuario de la aplicacion
En caso de existir debera guardar en request la informacion del usuario (sesion)
*/

import ServerError from "../helpers/serverError.helper.js"
import userRepository from "../repository/user.repository.js"

/* 
Este authMiddleware tendra verificacion de existencia de usuario y TAMBIEN cumplimiento de rol
Es decir si el rol no es suficiente para hacer la operacion el middleware debera rechazar la consulta con status 403 prohebido
Se pasara al middleware la lista de roles validos y el middleware validara, en caso de no enviar lista o enviarla vacia dejara que cualquier usuario logueado haga la operacion

Como puedo hacer que un middleware sea configurable?
EJ: 
- authMiddleware(["free"]) => Solo dejara que la operacion la haga el free
- authMiddleware([]) => Cualquiera haga la operacion
- authMiddleware(["premium", 'free']) => Solo los premium o free role podran hacer la operacion

*/
//La tecnica es que tu middleware retorne un middleware
/* export function middleware(params){
    return function (request, response, next){
        console.log(params)
        next()
    }
} */
//middleware('pepe')
//Retorna
/* 
return function (request, response, next){
    next()
}
*/

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
            if(
                valid_roles.length > 0 
                && 
                !(valid_roles.includes(user.role))
            ){
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



/* 
AuthMiddleware sin verificacion de role, solo verifica que exista el usuario

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
} */

export default authMiddleware


/* 
Ejemplo simple
function alertar (mensaje){
    return function (){
        console.log(mensaje)
    }
}

document.addEventListener(
    'click',
    alertar('pepe')
)

document.addEventListener(
    'dbclick',
    alertar('juan')
) */