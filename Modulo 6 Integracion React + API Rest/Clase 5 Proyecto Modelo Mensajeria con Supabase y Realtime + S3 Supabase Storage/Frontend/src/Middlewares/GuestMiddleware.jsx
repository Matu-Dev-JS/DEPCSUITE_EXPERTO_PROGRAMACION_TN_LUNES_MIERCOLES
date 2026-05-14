import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, Outlet } from "react-router"

function GuestMiddleware (){
    const {isLogged} = useContext(AuthContext)

    if(!isLogged){
        return <Outlet/>
    }
    else{
        return <Navigate to={'/home'}/>
    }
}

export default GuestMiddleware
