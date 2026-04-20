import ENVIRONMENT from "../config/environment.config.js"
import ServerError from "../helpers/serverError.helper.js"
import userRepository from "../repository/user.repository.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/* 
El servicio suele ser opcional ya que es la capa mas compleja de entender porque agrupa muchas responsabilidades aveces medio borrosas o aveces NO tiene sufientes responsabilidades como para ser una capa definida en el sistema.
Logica de negocio
*/

class AuthService {
    async login(email, password) {
        const user_found = await userRepository.findByEmail(email)
        if (!user_found) {
            throw new ServerError('Usuario no encontrado', 404)
        }

        const isSamePassword = await bcrypt.compare(password, user_found.password)
        if (!isSamePassword) {
            throw new ServerError('Credenciales incorrectas', 401)
        }
        if(!user_found.email_verified){
            throw new ServerError('Usuario sin mail verificado', 401)
        }

        const auth_token = jwt.sign(
            { //El objeto que se guardara en el token
                id: user_found._id,
                email: user_found.email,
                created_at: user_found.created_at,
                role: user_found.role
            },
            ENVIRONMENT.JWT_SECRET_KEY
        )
        return auth_token
    }
    async register(email, password, username, telephone) {

    }
}

const authService = new AuthService()

export default authService