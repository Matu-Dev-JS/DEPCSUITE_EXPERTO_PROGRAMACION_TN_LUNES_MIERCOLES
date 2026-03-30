import ServerError from "../helpers/serverError.helper.js";
import missionRepository from "../repository/mission.repository.js";
import userRepository from "../repository/user.repository.js";

class MissionController {
    async create(request, response) {
        try {
            const { _id } = request.user
            const { title, description } = request.body


            const new_mission = await missionRepository.create(
                _id,
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
            if (error instanceof ServerError) {
                response.status(error.status).send(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                response.status(500).send(
                    {
                        ok: false,
                        status: 500,
                        message: "Error interno del servidor"
                    }
                )
            }
        }

    }

    async getById(request, response) {
        try {   
            const user = request.user
            const {mission_id} = request.params

            const mission = await missionRepository.getById(mission_id)
     
            if(!mission.fk_user_id.equals(user.id)){
                throw new ServerError('El usuario no puede hacer esta operacion', 403)
            }
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
            if (error instanceof ServerError) {
                response.status(error.status).send(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                console.log(error)
                response.status(500).send(
                    {
                        ok: false,
                        status: 500,
                        message: "Error interno del servidor"
                    }
                )
            }
        }
    }
}

const missionController = new MissionController();
export default missionController