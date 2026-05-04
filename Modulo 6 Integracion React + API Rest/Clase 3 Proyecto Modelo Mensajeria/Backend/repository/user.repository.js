import User from "../models/User.model.js";


class UserRepository {
    async crear (email, password, username) {
        await User.insertOne({email, password, username})
    }

    async buscarUnoPorEmail (email) {
        const user = await User.findOne({email})
        return user
    }

    async eliminarPorId (user_id){
        await User.findByIdAndDelete(user_id)
    }

    async desactivarPorId (user_id){
        const usuario = await User.findByIdAndUpdate(
            user_id, {
                active: false
            },
            {
                new: true
            }
        )
        return usuario
    }

    async actualizarPorId (user_id, nuevosDatos){
        await User.findByIdAndUpdate(
            user_id, 
            nuevosDatos, 
            {
                new: true
            }
        )
    }

    async obtenerTodos(){
        const usuarios = await User.find()
        return usuarios
    }

    async obtenerUnoPorId(user_id){
        const usuario = await User.findById(user_id)
        return usuario
    }
    
}

const userRepository = new UserRepository()
export default userRepository
