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
        data: data
    }
}

export async function register(username, password, email) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${window.location.origin}/login`,
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