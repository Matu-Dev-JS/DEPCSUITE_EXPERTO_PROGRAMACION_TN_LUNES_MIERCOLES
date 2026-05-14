import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const AuthContext = createContext()

function AuthContextProvider ({children}){
    const [isLogged, setIsLogged] = useState(false)
    const [session, setSession] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // 1. Obtener la sesión inicial de Supabase
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                setSession(session.user)
                setIsLogged(true)
            }
            setIsLoading(false)
        })

        // 2. Escuchar cambios en la autenticación (Login, Logout, Token Refresh)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Auth Event:", event)
            if (session) {
                setSession(session.user)
                setIsLogged(true)
            } else {
                setSession(null)
                setIsLogged(false)
            }
            setIsLoading(false)
        })

        return () => subscription.unsubscribe()
    }, [])

    const providerValues = {
        session,
        isLogged,
        isLoading
    }

    return(
        <AuthContext.Provider value={providerValues}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider