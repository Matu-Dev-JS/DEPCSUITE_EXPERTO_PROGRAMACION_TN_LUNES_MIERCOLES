import ServerError from "../helpers/serverError.helper.js";
import Mission from "../models/mission.model.js";
class MissionRepository{
    
    async create (
        fk_user_id,
        {
            title,
            description
        }
    ) 
    {
        try {
            const new_mission = await Mission.create({
                fk_user_id,
                title,
                description
            });
            return new_mission;
        }
        catch (error) {
            if(error.name === 'ValidationError'){
                throw new ServerError('Error de validacion en la mision', 400)
            }
            throw error
        }
    }
    async updateById(mission_id, title, description){
        const updated_mission = await Mission.findByIdAndUpdate(
            mission_id,
            { title, description },
            {returnDocument: 'after'}
        )
        return updated_mission
    }

    async updateStatusById(mission_id, status){
        const finish_date = status ? new Date() : null
        const update_status_mission = await Mission.findByIdAndUpdate(
            mission_id,
            { finish_date },
            {returnDocument: 'after'}
        )
        return update_status_mission
    }
    async deleteById (mission_id){
        const deleted_mission = await Mission.findByIdAndDelete(mission_id)
        return deleted_mission
    }

    async getMissionsByUserId(user_id){
        const missions = await Mission.find({fk_user_id: user_id})
        return missions
    }

    async getById (mission_id){
        console.log(mission_id)
        return await Mission.findById(mission_id)
    }
}
const missionRepository = new MissionRepository()
export default missionRepository