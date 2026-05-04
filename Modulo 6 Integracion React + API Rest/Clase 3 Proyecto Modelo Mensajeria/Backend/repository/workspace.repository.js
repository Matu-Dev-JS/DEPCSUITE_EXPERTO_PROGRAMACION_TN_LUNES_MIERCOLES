import MemberWorkspace from "../models/MemberWorkspace.model.js";
import Workspace from "../models/Workspace.model.js";

class WorkspaceRepository {

    async getById (workspace_id){
        return await Workspace.findById(workspace_id)
    }
    async getWorkspacesByUserId(user_id){
        const workspaces = await MemberWorkspace.find({fk_id_user: user_id})
        .populate({
            path: 'fk_id_workspace',
            match: {active: true}
        })


        const members_workspace = workspaces.filter((member) => member.fk_id_workspace !== null) 
        return members_workspace.map(
            (member_workspace) => {
                return {
                    member_id: member_workspace._id,
                    member_role: member_workspace.role,
                    member_id_user: member_workspace.fk_id_user,
                    workspace_image: member_workspace.fk_id_workspace.image,
                    workspace_title: member_workspace.fk_id_workspace.title,
                    workspace_id: member_workspace.fk_id_workspace._id
                    
                }
            }
        )
    }
    async create (fk_id_owner, title, image, description){
        const workspace = await Workspace.create({
            fk_id_owner,
            title,
            image,
            description
        })
        return workspace
    }

    async addMember (workspace_id, user_id, role){
        const member = await MemberWorkspace.create({
            fk_id_workspace: workspace_id,
            fk_id_user: user_id,
            role
        })
        return member
    }

    async getMemberByWorkspaceIdAndUserId(workspace_id, user_id){
        const member = await MemberWorkspace.findOne({fk_id_workspace: workspace_id, fk_id_user: user_id})
        return member
    }

    async delete(workspace_id){
        await Workspace.findByIdAndUpdate(workspace_id, {active: false})
    }
}

const workspaceRepository = new WorkspaceRepository()
export default workspaceRepository