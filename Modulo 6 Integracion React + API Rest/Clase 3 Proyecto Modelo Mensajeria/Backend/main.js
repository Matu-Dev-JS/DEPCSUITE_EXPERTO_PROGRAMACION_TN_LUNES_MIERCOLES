
import { connectMongoDB } from "./config/mongoDB.config.js"
import express from 'express'
import authRouter from "./routes/auth.router.js"
import cors from 'cors'
import workspaceRouter from "./routes/workspace.router.js"
import { verifyApiKeyMiddleware } from "./middlewares/apikey.middleware.js"
import { errorHandlerMiddleware } from "./middlewares/error.middleware.js"
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

connectMongoDB()

const app = express()

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Proyecto Modelo Mensajería API',
            version: '1.0.0',
            description: 'API REST para aplicación de mensajería con gestión de workspaces, canales y mensajes',
            contact: {
                name: 'API Support',
                email: 'support@example.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:8082',
                description: 'Servidor de desarrollo'
            }
        ],
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'x-api-key',
                    description: 'API Key para autenticación de la API'
                },
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Token JWT de usuario (formato: Bearer <token>)'
                }
            },
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        email: { type: 'string', format: 'email' },
                        password: { type: 'string' },
                        username: { type: 'string' },
                        created_at: { type: 'string', format: 'date-time' },
                        active: { type: 'boolean' },
                        email_verified: { type: 'boolean' }
                    }
                },
                Workspace: {
                    type: 'object',
                    properties: {
                        fk_id_owner: { type: 'string', description: 'ObjectId del usuario owner' },
                        title: { type: 'string' },
                        image: { type: 'string' },
                        description: { type: 'string' },
                        created_at: { type: 'string', format: 'date-time' },
                        active: { type: 'boolean' }
                    }
                },
                Channel: {
                    type: 'object',
                    properties: {
                        fk_id_workspace: { type: 'string' },
                        name: { type: 'string' },
                        created_at: { type: 'string', format: 'date-time' }
                    }
                },
                Message: {
                    type: 'object',
                    properties: {
                        mensaje: { type: 'string' },
                        created_at: { type: 'string', format: 'date-time' },
                        fk_workspace_channel_id: { type: 'string' },
                        fk_workspace_member_id: { type: 'string' }
                    }
                }
            }
        }
    },
    apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'API Docs - Proyecto Mensajería'
}))

app.use(cors())
app.use(express.json())
app.use(verifyApiKeyMiddleware)

app.get('/', (request, response) => {
    response.json({
        ok: true,
        message: 'Servidor funcionando correctamente',
        data: null
    })
})

app.use("/api/auth", authRouter)
app.use("/api/workspace", workspaceRouter)

app.use(errorHandlerMiddleware)

app.listen(
    8082,
    () => {
        console.log('Nuestra app se escucha en el puerto 8082')
        console.log('Documentación Swagger en: http://localhost:8082/api-docs')
    }
)

