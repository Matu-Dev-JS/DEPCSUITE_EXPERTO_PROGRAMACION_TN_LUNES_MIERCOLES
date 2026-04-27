import express from 'express'
import authController from '../controllers/auth.controller.js'

const authRouter = express.Router()

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Iniciar sesión de usuario
 *     description: |
 *       Permite a un usuario autenticarse en el sistema utilizando su correo electrónico y contraseña.
 *       
 *       **Funcionamiento Técnico:**
 *       1. Busca al usuario por su email en la base de datos.
 *       2. Compara la contraseña proporcionada con el hash almacenado utilizando bcrypt.
 *       3. Verifica si el usuario ha confirmado su correo electrónico.
 *       4. Si todo es correcto, genera un JWT (JSON Web Token) firmado con una clave secreta.
 *       5. Retorna el token que deberá ser enviado en las cabeceras de futuras peticiones (Bearer token).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: usuario@ejemplo.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: password123
 *     responses:
 *       200:
 *         description: Autenticación exitosa. Retorna el token de acceso.
 *         content:
 *           application/json:
 *             example:
 *               ok: true
 *               status: 200
 *               message: 'Usuario obtenido exitosamente'
 *               data:
 *                 auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Error de autenticación (Credenciales incorrectas o email no verificado).
 *         content:
 *           application/json:
 *             examples:
 *               invalidCredentials:
 *                 summary: Contraseña incorrecta
 *                 value:
 *                   ok: false
 *                   status: 401
 *                   message: 'Credenciales incorrectas'
 *               unverifiedEmail:
 *                 summary: Email no verificado
 *                 value:
 *                   ok: false
 *                   status: 401
 *                   message: 'Usuario sin mail verificado'
 *       404:
 *         description: El usuario no existe.
 *         content:
 *           application/json:
 *             example:
 *               ok: false
 *               status: 404
 *               message: 'Usuario no encontrado'
 */
authRouter.post('/login', authController.login)

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Registrar un nuevo usuario
 *     description: |
 *       Crea una nueva cuenta de usuario en el sistema y envía un correo de verificación.
 *       
 *       **Funcionamiento Técnico:**
 *       1. Verifica que el email no esté registrado previamente.
 *       2. Encripta la contraseña usando bcrypt con un factor de costo de 12.
 *       3. Crea el registro del usuario en la base de datos con el campo `email_verified` en false.
 *       4. Genera un token de verificación temporal (JWT).
 *       5. Envía un correo electrónico al usuario con un enlace que incluye dicho token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - username
 *               - telephone
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: nuevo@ejemplo.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: secreto123
 *               username:
 *                 type: string
 *                 example: matu_dev
 *               telephone:
 *                 type: string
 *                 example: "+5491122334455"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             example:
 *               ok: true
 *               status: 201
 *               message: "Usuario registrado con exito"
 *       400:
 *         description: El email ya se encuentra en uso.
 *         content:
 *           application/json:
 *             example:
 *               ok: false
 *               status: 400
 *               message: 'Usuario con mail ya registrado'
 */
authRouter.post('/register', authController.register)

/**
 * @swagger
 * /api/auth/verify-email:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Verificar el correo electrónico del usuario
 *     description: |
 *       Endpoint utilizado para confirmar la dirección de correo electrónico mediante un token enviado por mail.
 *       
 *       **Funcionamiento Técnico:**
 *       1. Recibe el `verification_token` por query params.
 *       2. Verifica la validez y firma del token JWT.
 *       3. Extrae el email del payload del token.
 *       4. Busca al usuario y verifica que no haya sido validado previamente.
 *       5. Actualiza el estado del usuario a `email_verified: true`.
 *     parameters:
 *       - in: query
 *         name: verification_token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token de verificación enviado por correo electrónico.
 *     responses:
 *       200:
 *         description: Correo electrónico verificado correctamente.
 *         content:
 *           application/json:
 *             example:
 *               ok: true
 *               status: 200
 *               message: "Mail verificado"
 *       400:
 *         description: Token ausente en la petición.
 *         content:
 *           application/json:
 *             example:
 *               ok: false
 *               status: 400
 *               message: 'Falta el token de verificacion'
 *       401:
 *         description: El usuario ya está verificado o el token es inválido.
 *         content:
 *           application/json:
 *             example:
 *               ok: false
 *               status: 401
 *               message: "Usuario ya verificado"
 *       404:
 *         description: El usuario asociado al token no existe.
 *         content:
 *           application/json:
 *             example:
 *               ok: false
 *               status: 404
 *               message: "Usuario no encontrado"
 */
authRouter.get('/verify-email', authController.verifyEmail)

export default authRouter
