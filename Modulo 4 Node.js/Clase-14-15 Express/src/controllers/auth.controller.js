import ServerError from "../helpers/serverError.helper.js"
import userRepository from "../repository/user.repository.js"

class AuthController {
    async login(request, response) {
        try {
            
            const { email, password } = request.body
            const user_found = await userRepository.findByEmail(email)
            if (!user_found) {
                throw new ServerError('Usuario no encontrado', 404)
            }
            if (user_found.password !== password) {
                throw new ServerError('Credenciales incorrectas', 401)
            }

            response.status(200).send({
                ok: true,
                status: 200,
                message: 'Usuario obtenido exitosamente',
                data: {
                    user: {
                        id: user_found._id,
                        email: user_found.email,
                        created_at: user_found.created_at
                    }
                }
            })
        }
        catch (error) {
            //Centralizamos todas las posibilidades de fallo

            //Si el error es esperado respondo con los datos de ese error
            if(error instanceof ServerError){
                response.status(error.status).send(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            //Si el error no es esperado (EXCEPCIONES)
            else{
                console.error("Error en auth.login", error)
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

const authController = new AuthController()

export default authController