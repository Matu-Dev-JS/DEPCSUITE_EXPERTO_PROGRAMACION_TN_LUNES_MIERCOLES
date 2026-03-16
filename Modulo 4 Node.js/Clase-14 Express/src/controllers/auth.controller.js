import userRepository from "../repository/user.repository.js"

class AuthController {
    async login (request, response){
        const {email, password} = request.body
        const user_found = await userRepository.findByEmail(email)
        if(!user_found){
            return response.status(404).send(
                {
                    ok: false,
                    message: "usuario no encontrado",
                    status: 404
                }
            )
        }
        if( user_found.password !== password ){
            return response.status(401).send(
                {
                    ok: false,
                    message: 'Credenciales incorrectas',
                    status: 401
                }
            )
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
}

const authController = new AuthController()

export default authController