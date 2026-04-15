import dotenv from 'dotenv'

dotenv.config()

const ENVIRONMENT = {
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    PORT: process.env.PORT,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MAIL_USERNAME: process.env.MAIL_USERNAME,
    URL_BACKEND: process.env.URL_BACKEND,
    MODE: process.env.MODE
}

export default ENVIRONMENT
