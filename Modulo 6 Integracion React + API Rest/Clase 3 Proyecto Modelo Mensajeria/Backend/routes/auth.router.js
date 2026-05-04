import express from 'express'
import authController from '../controllers/auth.controller.js'

const authRouter = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - username
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: usuario@ejemplo.com
 *         password:
 *           type: string
 *           format: password
 *           example: contraseña123
 *         username:
 *           type: string
 *           example: usuario123
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           format: password
 *     AuthResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         message:
 *           type: string
 *         status:
 *           type: integer
 *         data:
 *           type: object
 *           properties:
 *             auth_token:
 *               type: string
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Datos faltantes o email ya registrado
 *       401:
 *         description: API Key inválida
 */
authRouter.post(
    '/register', 
    authController.register
)

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Inicia sesión con credenciales
 *     tags: [Auth]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Email inválido o faltante
 *       401:
 *         description: Credenciales inválidas o email no verificado
 */
authRouter.post(
    '/login',
    authController.login
)

/**
 * @swagger
 * /api/auth/verify-email:
 *   get:
 *     summary: Verifica el email del usuario
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: verification_email_token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token JWT de verificación
 *     responses:
 *       302:
 *         description: Email validado, redirección al frontend
 *       400:
 *         description: Token no enviado o usuario ya verificado
 *       401:
 *         description: Token inválido
 *       404:
 *         description: Usuario no existe
 */
authRouter.get(
    '/verify-email',
    authController.verifyEmail
)

export default authRouter