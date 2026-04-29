import missionRepository from "../repository/mission.repository.js";

class MissionService {
    async getAllMissions(user_id) {
        const missions = await missionRepository.getMissionsByUserId(user_id);
        return missions;
    }

    async getMissionById(mission_id) {
        const mission = await missionRepository.getById(mission_id);
        return mission;
    }

    async createMission(user_id, mission_data) {
        const new_mission = await missionRepository.create(user_id, mission_data);
        return new_mission;
    }
}

const missionService = new MissionService();
export default missionService;
