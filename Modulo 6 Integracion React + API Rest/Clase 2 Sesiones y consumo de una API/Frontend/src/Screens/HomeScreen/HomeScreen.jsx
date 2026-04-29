import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const HomeScreen = () => {
    const {isLogged} = useContext(AuthContext)
    console.log(isLogged)
    return (
        <div>
            <h1>Bienvenido!!</h1>
        </div>
    )
}

export default HomeScreen