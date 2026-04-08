import express from 'express'
import missionController from '../controllers/mission.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'
import randomMiddleware from '../middlewares/random.middleware.js'

const missionRouter = express.Router()


missionRouter.post(
    '/:user_id',
    authMiddleware(['premium']),
    missionController.create
)

missionRouter.get(
    '/:user_id/:mission_id',
    authMiddleware(),
    missionController.getById
)

export default missionRouter