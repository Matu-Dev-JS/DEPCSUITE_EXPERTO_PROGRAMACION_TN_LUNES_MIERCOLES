import React from 'react'

const LoginScreen = () => {

    /* 
    OBJETIVO:
    1. Capturar los datos del formulario
    2. Enviar los datos al servidor
    
    */

    function handleSubmit (event){
        event.preventDefault()
        const datos_formulario = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        console.log('Datos del formulario', datos_formulario)
    }
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
                <button type='submit'>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default LoginScreen