import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import User from "./models/user.model.js";
import userReository from "./repository/user.repository.js";


connectMongoDB()

/* userRepository.create('juan', 'juan123', 'juan@gmail.com', '1222321321') */
//userRepository.deleteById('69a8b66a2b2fc672c1973bf2')

/* userRepository.updateById(
    '69a8b94b47ec97a2c30331ec',
    {
        username: 'juancito'
    }
) */

//userRepository.findById('69a8b94b47ec97a2c30331ec').then((result) => console.log(result))
//userRepository.findByEmail('juan@gmail.com').then((result) => console.log(result))
//userRepository.getAll().then((result) => console.log(result))
