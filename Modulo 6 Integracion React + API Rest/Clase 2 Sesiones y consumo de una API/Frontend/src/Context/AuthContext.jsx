import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({
    isLogged: false,
    login: (response) => {},
    logout: () => {},
    user: null
})

const AuthContextProvider = () => {
    const [isLogged, setIsLogged] = useState(
        Boolean(
            localStorage.getItem('auth_token')
        )
    )

    //Datos de sesion del usuario asociados al token
    const [user, setUser] = useState(
        localStorage.getItem('auth_token') 
        ? jwtDecode(
            localStorage.getItem('auth_token')
        )
        : null
    )

    function login (token){
        setIsLogged(true)
        localStorage.setItem('auth_token', token)
    }

    function logout (){
        setIsLogged(false)
        localStorage.removeItem('auth_token')
    }
    
    const providerValues = {
        isLogged,
        login, 
        logout,
        user
    }
    return (
        <AuthContext.Provider value={providerValues}>
            <Outlet/>
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider}