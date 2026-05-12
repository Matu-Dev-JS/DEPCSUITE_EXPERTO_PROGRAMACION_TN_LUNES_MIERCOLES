import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext()

export const AUTH_TOKEN_KEY = 'auth_token'

function decodeAuthToken (auth_token){
    return jwtDecode(auth_token)
}

function AuthContextProvider ({children}){
    const auth_token = localStorage.getItem(AUTH_TOKEN_KEY)
    const [isLogged, setIsLogged] = useState(Boolean(auth_token))
    const [session, setSession] = useState(auth_token ? decodeAuthToken(auth_token) : null)

    function saveSession (auth_token){
        localStorage.setItem(AUTH_TOKEN_KEY, auth_token)
        setIsLogged(true)
        const session_decoded = jwtDecode(auth_token)
        setSession(session_decoded)
    }

    const providerValues = {
        saveSession,
        session,
        isLogged
    }
    return(
        <AuthContext.Provider value={providerValues}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider