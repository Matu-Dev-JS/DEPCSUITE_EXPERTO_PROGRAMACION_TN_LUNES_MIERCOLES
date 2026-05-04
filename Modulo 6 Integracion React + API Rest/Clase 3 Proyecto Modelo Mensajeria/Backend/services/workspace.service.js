import ServerError from "../helpers/error.helpers.js"
import workspaceRepository from "../repository/workspace.repository.js"

class WorkspaceService {
    async deleteFromUser(workspace_id, user_id) {
        const workspace_selected = await workspaceRepository.getById(workspace_id)
        if (!workspace_selected) {
            throw new ServerError('No existe ese espacio de trabajo', 404)
        }
        const member_info = await workspaceRepository.getMemberByWorkspaceIdAndUserId(workspace_id, user_id)
        if (member_info.role !== 'Owner') {
            throw new ServerError('No tienes permiso para eliminar este espacio de trabajo', 403)
        }
        await workspaceRepository.delete(workspace_id)
    }
}

const workspaceService = new WorkspaceService()
export default workspaceService