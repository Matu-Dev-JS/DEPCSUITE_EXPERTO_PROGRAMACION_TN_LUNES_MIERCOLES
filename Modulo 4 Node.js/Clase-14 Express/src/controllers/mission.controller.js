import missionRepository from "../repository/mission.repository.js";
import userRepository from "../repository/user.repository.js";

class MissionController {
    async create (request, response) {
        const {user_id} = request.params
        const {title, description} = request.body

        if(!user_id){
            return response.send({
                ok: false,
                status: 400, 
                message: 'Falta el id de usuario'
            })
        }
        const user_found =  await userRepository.findById(user_id)

        if(!user_found){
            return response.send(
                {
                    ok: false,
                    status: 404,
                    message: 'Usuario no encontrado'
                }
            )
        }
        const new_mission = await missionRepository.create(
            user_id, 
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
}

const missionController = new MissionController();
export default missionController