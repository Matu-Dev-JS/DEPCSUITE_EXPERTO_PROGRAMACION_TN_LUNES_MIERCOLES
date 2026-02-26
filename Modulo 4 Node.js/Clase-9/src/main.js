import ENVIRONMENT from "./config/environment.config.js"
import { checkConnectionDB } from "./config/mysql.config.js"
import userRepository from "./repositories/user.repository.js"

checkConnectionDB()

/* userRepository.create(
    {
        name: 'pepe',
        password: '123',
        email: 'pepe@gmail.com',
        telephone_number: '12',
        img_profile: null
    }
) */

    //userRepository.getById(6)

/*     userRepository.getByEmail('pepe@gmail.com') */

/*     userRepository.updateById(1, {name: 'pepesito', password: '1234'}) */

userRepository.getById(5)