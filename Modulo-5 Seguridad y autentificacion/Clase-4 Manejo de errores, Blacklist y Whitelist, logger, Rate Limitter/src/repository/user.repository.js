import ServerError from "../helpers/serverError.helper.js"
import User from "../models/user.model.js"

class UserRepository{
    async create (
        username, 
        password, 
        email, 
        telephone
    ){  
        try{
            await User.create({
                username: username,
                password,
                email,
                telephone
            })

        }
        catch(error){
            if(error.code === 11000){
                if(error.keyPattern.email){
                     throw new ServerError('El email ya esta registrado', 400)
                }
                throw new ServerError('Dato duplicado', 400)
            }
            if(error.name === 'ValidationError'){
                throw new ServerError('Error de validacion en los datos', 400)
            }
            throw error
        }
    }

    async findById (user_id){
        const user_found = await User.findById(user_id)
        return user_found
    }

    async findByEmail(email){
        const user_found = await User.findOne({email: email})
        return user_found
    }

    async getAll(){
        const users = await User.find()
        return users
    }

    async deleteById (user_id){
        await User.findByIdAndDelete(user_id)
    }

    async updateById (user_id, update_data){
        const updated_user = await User.findByIdAndUpdate(
            user_id,
            update_data,
            {
                returnDocument: 'after'
            }
        )
        return updated_user
    }
}

const userRepository = new UserRepository()

export default userRepository