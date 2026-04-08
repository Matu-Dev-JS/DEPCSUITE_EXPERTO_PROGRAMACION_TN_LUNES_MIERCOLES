import ServerError from "../helpers/serverError.helper.js"
import userRepository from "../repository/user.repository.js"
import bcrypt from 'bcrypt'
import authService from "../services/auth.service.js"
import jwt from 'jsonwebtoken'
import ENVIRONMENT from "../config/environment.config.js"
import mailTransporter from "../config/mail.config.js"

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

            const user_found = await userRepository.findByEmail(email)
            if(user_found){
                throw new ServerError('Usuario con mail ya registrado', 400)
            }

            const hashed_password = await bcrypt.hash(password, 12)
            
            await userRepository.create(
                username,
                hashed_password,
                email,
                telephone
            )
            //Creamos token de verificacion que enviaremos por mail con el email del usuario que acabamos de crear
            const verification_token = jwt.sign(
                { //El objeto que se guardara en el token
                    email: email
                },
                ENVIRONMENT.JWT_SECRET_KEY
            )

            //Envio un mail al cliente con el link de verificion que apunta a mi backend y que tiene tambien el token de verificion creado
            await mailTransporter.sendMail(
                {
                    to: email,
                    from: ENVIRONMENT.MAIL_USERNAME,
                    subject: 'Verificacion de correo electronico',
                    html: `
                    <h1>Bienvenido</h1>
                    <p>Para verificar tu cuenta haz clic en "verificar"</p>
                    <a href='${ENVIRONMENT.URL_BACKEND}/api/auth/verify-email?verification_token=${verification_token}'>Verificar</a>
                    `
                }
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