import express from 'express'
import missionController from '../controllers/mission.controller.js'
import { verifyAuthTokenMiddleware } from '../middlewares/auth.middleware.js'

const missionRouter = express.Router()


missionRouter.post(
    '/',
    verifyAuthTokenMiddleware(['premium']),
    missionController.create
)

missionRouter.get(
    '/:mission_id',
    verifyAuthTokenMiddleware(),
    missionController.getById
)

export default missionRouter