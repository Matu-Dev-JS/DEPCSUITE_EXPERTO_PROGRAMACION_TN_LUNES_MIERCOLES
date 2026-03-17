import express from 'express'
import missionController from '../controllers/mission.controller.js'

const missionRouter = express.Router()

missionRouter.post(
    '/:user_id',
    missionController.create
)

export default missionRouter