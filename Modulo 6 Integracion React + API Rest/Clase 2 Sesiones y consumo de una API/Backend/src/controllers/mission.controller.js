import missionService from "../services/mission.service.js";

class MissionController {
    async create(request, response, next) {
        try {
            const { id } = request.user
            const { title, description } = request.body

            const new_mission = await missionService.createMission(
                id,
                {
                    title,
                    description
                }
            )

            response.send(
                {
                    ok: true,
                    status: 201,
                    message: 'Mision creada exitosamente',
                    data: {
                        new_mission
                    }
                }
            )
        }
        catch (error) {
            next(error)
        }

    }

    async getById(request, response, next) {
        try {   
            const {mission_id} = request.params

            const mission = await missionService.getMissionById(mission_id)
            response.send(
                {
                    ok: true, 
                    status: 200,
                    message: "Mision obtenida",
                    data: {
                        mission
                    }
                }
            )
        }
        catch (error) {
            next(error)
        }
    }

    async getAllByUserId(request, response, next) {
        try {
            const { id } = request.user
            const missions = await missionService.getAllMissions(id)
            response.send(
                {
                    ok: true,
                    status: 200,
                    message: "Misiones obtenidas",
                    data: {
                        missions
                    }
                }
            )
        }
        catch (error) {
            next(error)
        }
    }
}

const missionController = new MissionController();
export default missionController