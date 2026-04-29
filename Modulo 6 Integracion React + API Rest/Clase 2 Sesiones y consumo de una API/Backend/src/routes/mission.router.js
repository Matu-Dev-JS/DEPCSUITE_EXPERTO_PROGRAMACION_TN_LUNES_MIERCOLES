import express from 'express'
import missionController from '../controllers/mission.controller.js'
import { verifyAuthTokenMiddleware } from '../middlewares/auth.middleware.js'
import limiterMiddleware from '../middlewares/limitter.middleware.js'


const missionRouter = express.Router()


missionRouter.post(
    '/',
    verifyAuthTokenMiddleware(['premium']),
    missionController.create
)

missionRouter.get(
    '/',
    verifyAuthTokenMiddleware(),
    missionController.getAllByUserId
)

missionRouter.get(
    '/:mission_id',
    verifyAuthTokenMiddleware(),
    limiterMiddleware,
    missionController.getById
)

export default missionRouter

//WEBSOCKET