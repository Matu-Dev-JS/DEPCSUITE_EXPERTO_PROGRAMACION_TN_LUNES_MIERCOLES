import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import useForm from '../../hooks/useForm'
import useRequest from '../../hooks/useRequest'
import { login } from '../../services/authService'
import useLogin from '../../hooks/useLogin'
import './LoginScreen.css'

const LoginScreen = () => {
    const {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        loading,
        error,
        response
    } = useLogin()

    return (
        <div className="login-container">
            <div className="login-card">
                <header className="login-header">
                    <h1>Inicia sesión</h1>
                    <p>Ingresa tus credenciales para continuar</p>
                </header>

                <form onSubmit={onSubmitForm} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="form-input"
                            onChange={onChangeFieldValue} 
                            value={form_state.email} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="form-input"
                            onChange={onChangeFieldValue} 
                            value={form_state.password} 
                        />
                    </div>
                    {
                        error && <span className="error-message">{error.message}</span>
                    }
                    {
                        response && response.ok && 
                        <span className="success-message">
                            Te has logueado exitosamente
                        </span>
                    }
                    <button type="submit" className="submit-btn" disabled={loading || (response && response.ok)}>
                        {loading ? 'Iniciando...' : 'Iniciar sesión'}
                    </button>
                </form>
                <footer className="login-footer">
                    <span>
                        ¿Aún no tienes cuenta? <Link to="/register">Regístrate</Link>
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default LoginScreen