import { ServerError } from "../utils/errorUtils"
import { supabase } from "../supabaseClient"

export async function getWorkspaceList() {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) throw new ServerError("No autenticado", 401)

    const { data, error } = await supabase
        .from('workspace_members')
        .select(`
            workspace_id,
            workspaces ( name, image_url )
        `)
        .eq('user_id', userData.user.id)

    if (error) {
        throw new ServerError(error.message, 400)
    }

    const workspaces = data.map(item => ({
        workspace_id: item.workspace_id,
        workspace_title: item.workspaces.name,
        workspace_image: item.workspaces.image_url,
        member_role: 'Miembro'
    }))

    return {
        ok: true,
        data: {
            workspaces
        }
    }
}

export async function createWorkspace(workspace_data, image_file) {
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) throw new ServerError("No autenticado", 401)

    let image_url = null;

    if (image_file) {
        const file_ext = image_file.name.split('.').pop();
        const file_name = `${Date.now()}.${file_ext}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('workspace_images')
            .upload(file_name, image_file);

        if (uploadError) throw new ServerError("Error al subir la imagen: " + uploadError.message, 400);

        const { data: publicUrlData } = supabase.storage
            .from('workspace_images')
            .getPublicUrl(file_name);
        
        image_url = publicUrlData.publicUrl;
    }

    // 1. Insertar workspace (owner_id se llena solo por DEFAULT, y el trigger crea la membresía)
    const { data: newWorkspace, error: wsError } = await supabase
        .from('workspaces')
        .insert([{ 
            name: workspace_data.title,
            image_url: image_url
        }])
        .select()
        .single()

    if (wsError) throw new ServerError(wsError.message, 400)

    // 2. Crear canal por defecto (Esto funciona porque el trigger ya te hizo miembro en el paso anterior)
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
            image_url: newWorkspace.image_url,
            member_role: 'owner'
        }
    }
}