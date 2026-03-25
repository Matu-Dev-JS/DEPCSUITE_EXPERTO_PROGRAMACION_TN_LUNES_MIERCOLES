import ServerError from "../helpers/serverError.helper.js";
import missionRepository from "../repository/mission.repository.js";
import userRepository from "../repository/user.repository.js";

class MissionController {
    async create(request, response) {
        try {
            const { user_id } = request.params
            const { title, description } = request.body


            if (!user_id) {
                throw new ServerError('Falta el id de usuario', 400)
            }
            
            const user_found = await userRepository.findById(user_id)

            if (!user_found) {
                throw new ServerError( 'Usuario no encontrado', 404)
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
}

const missionController = new MissionController();
export default missionController