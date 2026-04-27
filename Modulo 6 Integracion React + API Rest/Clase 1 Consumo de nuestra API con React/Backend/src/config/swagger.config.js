import swaggerJSDoc from "swagger-jsdoc";


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Gestor de tareas y misiones",
            version: '1.0.0',
            description: "Una api que permite gestionar el estado de misiones y sus tareas",
        },
        servers: [
            {
                url: 'https://modulo-4-depcsuite-backend.vercel.app'
            }
        ],
    },
    apis: [
        './src/routes/*.js'
    ]
}

//Creamos unas especificaciones (configuraciones y definiciones)
const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec