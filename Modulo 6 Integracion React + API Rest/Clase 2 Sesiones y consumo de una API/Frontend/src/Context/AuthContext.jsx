import { createContext, useState } from "react";
import { Outlet } from "react-router";

const AuthContext = createContext({
    isLogged: false
})

const AuthContextProvider = () => {
    //obtenemos el token guardado
    const auth_token = localStorage.getItem('auth_token')

    //Este estado servira para saber si el usuario esta logueado o no
    //Si el token estaba guardado entonces para nosotros esta logueado, sino no
    const [isLogged, setIsLogged] = useState(Boolean(auth_token))
    
    const providerValues = {
        isLogged
    }
    return (
        <AuthContext.Provider value={providerValues}>
            <Outlet/>
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider}