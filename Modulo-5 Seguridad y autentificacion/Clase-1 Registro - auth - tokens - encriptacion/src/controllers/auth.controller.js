import ServerError from "../helpers/serverError.helper.js"
import userRepository from "../repository/user.repository.js"
import bcrypt from 'bcrypt'
import authService from "../services/auth.service.js"

/* 
Comunicacion con cliente
*/

class AuthController {
    async login(request, response) {
        try {

            const { email, password } = request.body
            const auth_token = await authService.login(email, password)
            response.status(200).send({
                ok: true,
                status: 200,
                message: 'Usuario obtenido exitosamente',
                data: {
                    auth_token
                }
            })
        }
        catch (error) {
            //Centralizamos todas las posibilidades de fallo

            //Si el error es esperado respondo con los datos de ese error
            if (error instanceof ServerError) {
                response.status(error.status).send(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            //Si el error no es esperado (EXCEPCIONES)
            else {
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


    async register(request, response) {
        try { 
            const {
                email, 
                password, 
                username,
                telephone
            } = request.body

            const hashed_password = await bcrypt.hash(password, 12)

            await userRepository.create(
                username,
                hashed_password,
                email,
                telephone
            )

            response.status(201).json({
                ok: true, 
                status: 201,
                message:"Usuario registrado con exito"
            })
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