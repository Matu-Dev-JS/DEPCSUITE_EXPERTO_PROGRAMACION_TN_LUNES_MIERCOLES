import express from 'express'
import statusController from '../controllers/status.controller.js'
import randomMiddleware from '../middlewares/random.middleware.js'
import authMiddleware, { verifyAuthTokenMiddleware } from '../middlewares/auth.middleware.js'
import auditContextMiddleware from '../middlewares/auditContext.middleware.js'


const statusRouter = express.Router()

statusRouter.get('/', verifyAuthTokenMiddleware(['free']), auditContextMiddleware, statusController.get)

export default statusRouter