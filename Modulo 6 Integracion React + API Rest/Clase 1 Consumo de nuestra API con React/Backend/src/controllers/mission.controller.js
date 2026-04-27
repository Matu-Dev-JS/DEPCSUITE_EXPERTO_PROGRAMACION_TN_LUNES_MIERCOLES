import ServerError from "../helpers/serverError.helper.js";
import missionRepository from "../repository/mission.repository.js";
import userRepository from "../repository/user.repository.js";

class MissionController {
    async create(request, response, next) {
        try {
            const { id } = request.user
            const { title, description } = request.body


            const new_mission = await missionRepository.create(
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
            const user = request.user
            const {mission_id} = request.params

            const mission = await missionRepository.getById(mission_id)
          /*   if(!mission.fk_user_id.equals(user.id)){
                throw new ServerError('El usuario no puede hacer esta operacion', 403)
            } */
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
}

const missionController = new MissionController();
export default missionController