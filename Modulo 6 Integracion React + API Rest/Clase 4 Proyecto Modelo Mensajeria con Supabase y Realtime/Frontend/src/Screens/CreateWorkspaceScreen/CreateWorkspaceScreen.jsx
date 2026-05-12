import React from 'react';
import { Link, useNavigate } from 'react-router';
import useCreateWorkspace from '../../hooks/useCreateWorkspace';
import './CreateWorkspaceScreen.css';

const CreateWorkspaceScreen = () => {
    const {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        isLoading,
        error,
        errors
    } = useCreateWorkspace();

    return (
        <div className="create-workspace-container">
            <div className="create-workspace-card">
                <header className="create-workspace-header">
                    <h1>Crear un nuevo espacio de trabajo</h1>
                    <p>Los espacios de trabajo son donde tu equipo se comunica.</p>
                </header>

                <form className="workspace-form" onSubmit={onSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Nombre del espacio de trabajo</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-input"
                            placeholder="Ej. Proyecto Alpha"
                            value={form_state.title}
                            onChange={onChangeFieldValue}
                            disabled={isLoading}
                        />
                        {errors.title && <span className="error-message">⚠️ {errors.title}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-textarea"
                            placeholder="¿De qué trata este espacio?"
                            value={form_state.description}
                            onChange={onChangeFieldValue}
                            disabled={isLoading}
                        />
                        <div className={`char-counter ${form_state.description.length > 900 ? 'limit-near' : ''} ${form_state.description.length >= 1000 ? 'limit-reached' : ''}`}>
                            {form_state.description.length} / 1000
                        </div>
                        {errors.description && <span className="error-message">⚠️ {errors.description}</span>}
                    </div>

                    {error && <div className="error-message">Error al crear el workspace: {error.message}</div>}

                    <button type="submit" className="submit-btn" disabled={form_state.description.length > 1000 || isLoading}>
                        {isLoading ? 'Creando...' : 'Crear espacio de trabajo'}
                    </button>
                </form>

                <div className="back-link">
                    <Link to="/home">Volver a la lista de workspaces</Link>
                </div>
            </div>
        </div>
    );
};

export default CreateWorkspaceScreen;