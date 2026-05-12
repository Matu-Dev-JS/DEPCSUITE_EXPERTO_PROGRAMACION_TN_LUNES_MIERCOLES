import ENVIRONMENT from "../config/environment.config.js"
import userRepository from "../repository/user.repository.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mail_transporter from "../config/mail.config.js"
import ServerError from "../helpers/error.helpers.js"

class AuthController {
    async register(request, response) {
        const { email, password, username } = request.body

        if (!email || !password || !username) {
            throw new ServerError('Debes enviar todos los datos', 400)
        }

        const user = await userRepository.buscarUnoPorEmail(email)
        if (user) {
            throw new ServerError('El email ya esta registrado', 400)
        }
        let hashed_password = await bcrypt.hash(password, 10)
        await userRepository.crear(email, hashed_password, username)

        const verification_email_token = jwt.sign(
            {
                email: email
            },
            ENVIRONMENT.JWT_SECRET_KEY
        )

        mail_transporter.sendMail(
            {
                from: ENVIRONMENT.GMAIL_USERNAME,
                to: email,
                subject: 'Verifica tu email',
                html: `
                <h1>Bienvenido ${username}</h1>
                <p>Necesitamos que verifiques tu mail</p>
                <p>Haz click en "Verificar" para verificar este mail</p>
                <a 
                href='${ENVIRONMENT.URL_BACKEND}/api/auth/verify-email?verification_email_token=${verification_email_token}'
                >Verificar</a>
                <br>
                <span>Si desconoces este registro desestima este mail</span>
                `
            }
        )

        return response.json({
            message: 'Usuario creado exitosamente',
            status: 201,
            ok: true,
            data: null
        })
    }

    async login(request, response) {
        const { email, password } = request.body
        if (!email) {
            throw new ServerError('Debes enviar un email', 400)
        }
        else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))) {
            throw new ServerError('El email no es valido', 400)
        }

        const usuario_encontrado = await userRepository.buscarUnoPorEmail(email)

        if (!usuario_encontrado) {
            throw new ServerError('Credenciales invalidas', 401)
        }

        if (!(await bcrypt.compare(password, usuario_encontrado.password))) {
            throw new ServerError('Credenciales invalidas', 401)
        }

        if (!usuario_encontrado.email_verified) {
            throw new ServerError('Usuario con email no verificado', 401)
        }

        const datos_del_token = {
            username: usuario_encontrado.username,
            email: usuario_encontrado.email,
            id: usuario_encontrado.id
        }


        const auth_token = jwt.sign(datos_del_token, ENVIRONMENT.JWT_SECRET_KEY)
        return response.json({
            message: 'Inicio de sesion exitoso',
            ok: true,
            status: 200,
            data: {
                auth_token: auth_token
            }
        })

    }

    async verifyEmail(request, response) {
        const { verification_email_token } = request.query

        if (!verification_email_token) {
            throw new ServerError('No se envio el token de verificacion', 400)
        }

        try {
            const { email } = jwt.verify(
                verification_email_token,
                ENVIRONMENT.JWT_SECRET_KEY
            )
            const user_found = await userRepository.buscarUnoPorEmail(email)

            if (!user_found) {
                throw new ServerError('No existe usuario con ese mail', 404)
            }

            if (user_found.email_verified) {
                throw new ServerError('Usuario ya verificado', 400)
            }

            await userRepository.actualizarPorId(
                user_found._id,
                {
                    email_verified: true
                }
            )

            return response.redirect(
                ENVIRONMENT.URL_FRONTEND + '/login?from=email-validated'
            )
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                throw new ServerError('No autorizado', 401)
            }
            throw error
        }
    }
}

const authController = new AuthController()

export default authController

