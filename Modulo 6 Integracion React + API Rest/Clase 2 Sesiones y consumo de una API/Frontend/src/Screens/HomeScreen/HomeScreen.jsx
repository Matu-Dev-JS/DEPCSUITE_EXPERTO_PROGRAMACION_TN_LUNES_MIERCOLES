import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const HomeScreen = () => {
    const {isLogged, user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>Bienvenido!! {user.email}</h1>
        </div>
    )
}

export default HomeScreen