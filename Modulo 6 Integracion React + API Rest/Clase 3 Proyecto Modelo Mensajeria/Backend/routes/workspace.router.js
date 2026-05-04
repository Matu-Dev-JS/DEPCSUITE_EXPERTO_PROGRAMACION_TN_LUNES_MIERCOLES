import express from "express";
import workspaceController from "../controllers/workspace.controller.js";
import authMiddleware from "../middlewares/auth.middlware.js";
import workspaceMiddleware from "../middlewares/workspace.middleware.js";
import { channelController } from "../controllers/channel.controller.js";
import channelMiddleware from "../middlewares/channel.middleware.js";
import messagesController from "../controllers/messages.controller.js";

const workspaceRouter = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     WorkspaceResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         status:
 *           type: integer
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             workspace:
 *               $ref: '#/components/schemas/Workspace'
 *             member:
 *               type: object
 *     ChannelResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         status:
 *           type: integer
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             channels:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Channel'
 *     MessagesResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         status:
 *           type: integer
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             messages:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 */

/**
 * @swagger
 * /api/workspace/:
 *   get:
 *     summary: Obtiene los workspaces del usuario
 *     tags: [Workspace]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Workspaces obtenidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     workspaces:
 *                       type: array
 *                       items:
 *                         type: object
 *       401:
 *         description: No autorizado
 */
workspaceRouter.get('/', authMiddleware, workspaceController.getWorkspaces)

/**
 * @swagger
 * /api/workspace/:
 *   post:
 *     summary: Crea un nuevo workspace
 *     tags: [Workspace]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Workspace creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WorkspaceResponse'
 *       401:
 *         description: No autorizado
 */
workspaceRouter.post('/', authMiddleware, workspaceController.create)

/**
 * @swagger
 * /api/workspace/{workspace_id}:
 *   get:
 *     summary: Obtiene un workspace por ID
 *     tags: [Workspace]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspace_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workspace encontrado
 *       403:
 *         description: No perteneces al workspace
 *       404:
 *         description: Workspace no existe
 */
workspaceRouter.get('/:workspace_id', authMiddleware, workspaceMiddleware(), workspaceController.getById)

/**
 * @swagger
 * /api/workspace/{workspace_id}:
 *   delete:
 *     summary: Elimina un workspace (solo Owner)
 *     tags: [Workspace]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspace_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workspace eliminado
 *       403:
 *         description: No tienes permiso
 *       404:
 *         description: Workspace no existe
 */
workspaceRouter.delete('/:workspace_id', authMiddleware, workspaceController.delete)

/**
 * @swagger
 * /api/workspace/{workspace_id}/members:
 *   post:
 *     summary: Invita a un miembro al workspace
 *     tags: [Workspace]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspace_id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               role:
 *                 type: string
 *                 enum: [Owner, Admin, User]
 *     responses:
 *       201:
 *         description: Invitación enviada
 *       400:
 *         description: Usuario ya es miembro
 *       403:
 *         description: No autorizado
 *       404:
 *         description: Email no existe
 */
workspaceRouter.post(
    '/:workspace_id/members', 
    authMiddleware, 
    workspaceMiddleware(['Owner', 'Admin']), 
    workspaceController.addMemberRequest
)

/**
 * @swagger
 * /api/workspace/{workspace_id}/members/accept-invitation:
 *   get:
 *     summary: Acepta invitación a workspace
 *     tags: [Workspace]
 *     parameters:
 *       - in: query
 *         name: invitation_token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirección al frontend
 *       401:
 *         description: Token inválido
 */
workspaceRouter.get('/:workspace_id/members/accept-invitation', workspaceController.acceptInvitation)

/**
 * @swagger
 * /api/workspace/{workspace_id}/channels:
 *   get:
 *     summary: Obtiene canales del workspace
 *     tags: [Channels]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspace_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Canales obtenidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ChannelResponse'
 */
workspaceRouter.get(
    '/:workspace_id/channels',
    authMiddleware,
    workspaceMiddleware(),
    channelController.getAllByWorkspaceId
)

/**
 * @swagger
 * /api/workspace/{workspace_id}/channels:
 *   post:
 *     summary: Crea un canal en el workspace
 *     tags: [Channels]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspace_id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Canal creado
 *       403:
 *         description: No autorizado
 */
workspaceRouter.post(
    '/:workspace_id/channels',
    authMiddleware,
    workspaceMiddleware(['Owner', 'Admin']),
    channelController.create
)

/**
 * @swagger
 * /api/workspace/{workspace_id}/channels/{channel_id}/messages:
 *   post:
 *     summary: Envía un mensaje a un canal
 *     tags: [Messages]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspace_id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: channel_id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Mensaje creado
 *       403:
 *         description: No perteneces al workspace
 *       404:
 *         description: Canal no existe
 */
workspaceRouter.post(
    '/:workspace_id/channels/:channel_id/messages',
    authMiddleware,
    workspaceMiddleware(),
    channelMiddleware,
    messagesController.create
)

/**
 * @swagger
 * /api/workspace/{workspace_id}/channels/{channel_id}/messages:
 *   get:
 *     summary: Obtiene mensajes de un canal
 *     tags: [Messages]
 *     security:
 *       - ApiKeyAuth: []
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspace_id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: channel_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mensajes obtenidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessagesResponse'
 */
workspaceRouter.get(
    '/:workspace_id/channels/:channel_id/messages',
    authMiddleware,
    workspaceMiddleware(),
    channelMiddleware,
    messagesController.getByChannelId
)

export default workspaceRouter