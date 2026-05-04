import React from 'react'
import { Link } from 'react-router'
import useForm from '../../hooks/useForm'
import { register } from '../../services/authService'
import useRequest from '../../hooks/useRequest'
import useRegister from '../../hooks/useRegister'
import './RegisterScreen.css'

const RegisterScreen = () => {
    const {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        loading,
        error,
        response
    } = useRegister()
    return (
        <div className="register-container">
            <div className="register-card">
                <header className="register-header">
                    <h1>Regístrate en la aplicación</h1>
                    <p>Crea tu cuenta para comenzar</p>
                </header>

                <form onSubmit={onSubmitForm} className="register-form">
                    <div className="form-group">
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-input"
                            value={form_state.username}
                            onChange={onChangeFieldValue}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            value={form_state.password}
                            onChange={onChangeFieldValue}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={form_state.email}
                            onChange={onChangeFieldValue}
                        />
                    </div>
                    {
                        error && <span className="error-message">{error.message}</span>
                    }
                    {
                        response && response.ok && 
                        <span className="success-message">
                            Usuario registrado exitosamente, te enviaremos un mail con instrucciones.
                        </span>
                    }
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrarse'}
                    </button>
                </form>
                <footer className="register-footer">
                    <span>
                        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default RegisterScreen