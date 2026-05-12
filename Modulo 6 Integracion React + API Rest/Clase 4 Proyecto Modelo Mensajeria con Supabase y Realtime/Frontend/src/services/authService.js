import { ServerError } from "../utils/errorUtils"
import { supabase } from "../supabaseClient"

export async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        throw new ServerError(error.message, error.status || 400)
    }

    return {
        ok: true,
        data: {
            auth_token: data.session.access_token
        }
    }
}

export async function register(username, password, email) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username: username
            }
        }
    })

    if (error) {
        throw new ServerError(error.message, error.status || 400)
    }

    return {
        ok: true,
        message: "Usuario creado exitosamente",
        status: 201,
        data: data
    }
}