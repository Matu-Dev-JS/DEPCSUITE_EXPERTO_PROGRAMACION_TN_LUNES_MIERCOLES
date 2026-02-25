import dotenv from 'dotenv'

//Lee el archivo root .env del proyecto y carga las variables de entorno dentro de la constante process
dotenv.config()

const ENVIRONMENT = {
    MYSQL_PORT: process.env.MYSQL_DB_PORT,
    MYSQL_HOST: process.env.MYSQL_DB_HOST,
    MYSQL_USERNAME: process.env.MYSQL_DB_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_DB_PASSWORD,
    MYSQL_DATABASE_NAME: process.env.MYSQL_DB_NAME
}

export default ENVIRONMENT