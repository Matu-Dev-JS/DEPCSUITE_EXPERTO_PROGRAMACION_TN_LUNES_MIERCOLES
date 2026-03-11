import dotenv from 'dotenv';
dotenv.config();


const ENVIRONMENT = {
    PORT: process.env.PORT || 8080
}

export default ENVIRONMENT;