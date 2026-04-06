import dotenv from 'dotenv'

dotenv.config()

const ENVIRONMENT = {
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    PORT: process.env.PORT
}

export default ENVIRONMENT
