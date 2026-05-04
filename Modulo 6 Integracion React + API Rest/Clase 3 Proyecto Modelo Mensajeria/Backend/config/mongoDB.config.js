import mongoose from "mongoose"
import ENVIRONMENT from "./environment.config.js"

const connection_string = `${ENVIRONMENT.MONGO_DB_URI}/${ENVIRONMENT.MONGO_DB_NAME}`

export async function connectMongoDB (){
    try{
        await mongoose.connect(
            connection_string
        )
        console.log("Conexion a MongoDB exitosa")
    }
    catch(error){
        console.error("Conexion con MongoDB fallo")
        console.error(error)
    }
    
}

