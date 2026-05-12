import { ServerError } from "../utils/errorUtils"
import { supabase } from "../supabaseClient"

export async function getWorkspaceList() {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) throw new ServerError("No autenticado", 401)

    const { data, error } = await supabase
        .from('workspace_members')
        .select(`
            workspace_id,
            workspaces ( name )
        `)
        .eq('user_id', userData.user.id)

    if (error) {
        throw new ServerError(error.message, 400)
    }

    const workspaces = data.map(item => ({
        workspace_id: item.workspace_id,
        workspace_title: item.workspaces.name,
        member_role: 'Miembro'
    }))

    return {
        ok: true,
        data: {
            workspaces
        }
    }
}

export async function createWorkspace(workspace_data) {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) throw new ServerError("No autenticado", 401)

    // Insert workspace
    const { data: newWorkspace, error: wsError } = await supabase
        .from('workspaces')
        .insert([{ name: workspace_data.title }])
        .select()
        .single()

    if (wsError) throw new ServerError(wsError.message, 400)

    // Insert member
    const { error: memberError } = await supabase
        .from('workspace_members')
        .insert([{ 
            workspace_id: newWorkspace.id, 
            user_id: userData.user.id 
        }])

    if (memberError) throw new ServerError(memberError.message, 400)

    // Create default channel
    await supabase
        .from('channels')
        .insert([{
            workspace_id: newWorkspace.id,
            name: 'General'
        }])

    return {
        ok: true,
        data: {
            workspace_id: newWorkspace.id,
            workspace_title: newWorkspace.name,
            member_role: 'Creador'
        }
    }
}