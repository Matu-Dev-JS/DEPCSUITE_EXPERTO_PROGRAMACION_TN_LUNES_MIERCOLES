import React, { useContext, useEffect, useState } from 'react'
import { login } from '../../services/authService'
import useRequest from '../../hooks/useRequest'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../Context/AuthContext'

const LoginScreen = () => {
    const navigate = useNavigate()

    /* 
    OBJETIVO:
    1. Capturar los datos del formulario
    2. Enviar los datos al servidor
    
    */

    const {response, error, loading, sendRequest} = useRequest()
    const {login: loginContext} = useContext(AuthContext)

    async function handleSubmit (event){
        event.preventDefault()
        
        const datos_formulario = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        sendRequest(
            async () => await login(datos_formulario)
        )

    }

    useEffect (
        () => {
            if(response && response.ok){
                loginContext(response.data.auth_token)
                navigate('/home')
            }
        },
        [response]
    )
    return (
        <div>
            <h1>Iniciar sesion</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                {
                    error
                    && 
                    <span style={{color: 'red'}}>Error: {error.message}</span>
                }
                <br/>
                <button 
                    type='submit' 
                    disabled={loading} 
                >
                    { 
                        loading
                        ? 'Cargando'
                        : 'Iniciar sesion'
                    }
                </button>
            </form>
        </div>
    )
}

export default LoginScreen