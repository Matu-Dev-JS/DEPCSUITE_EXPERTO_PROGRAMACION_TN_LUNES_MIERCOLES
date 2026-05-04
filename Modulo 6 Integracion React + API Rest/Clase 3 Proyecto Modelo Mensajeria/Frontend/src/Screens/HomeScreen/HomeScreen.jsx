import React, { useContext } from 'react'
import { WorkspaceContext } from '../../Context/WorkspaceContext'
import { Link } from 'react-router'
import './HomeScreen.css'

const HomeScreen = () => {
    const {workspace_list_loading, workspace_list_error, workspace_list} = useContext(WorkspaceContext)
    console.log(workspace_list)

    if(workspace_list_loading || !workspace_list) {
        return <div className="loading-spinner">Cargando...</div>
    }

    return (
        <div className="home-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Workspaces</h2>
                    <Link to="/create-workspace" className="create-ws-btn">+</Link>
                </div>
                
                <div className="sidebar-section">
                    <div className="sidebar-section-title">Tus espacios</div>
                    <ul className="workspace-list">
                        {
                            workspace_list.data.workspaces && workspace_list.data.workspaces.length > 0 
                            ? workspace_list.data.workspaces.map(workspace => (
                                <li key={workspace.workspace_id} className="workspace-item">
                                    <div className="workspace-icon">
                                        {workspace.workspace_title.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="workspace-info">
                                        <div className="workspace-name">{workspace.workspace_title}</div>
                                        <div className="workspace-role">{workspace.member_role}</div>
                                    </div>
                                </li>
                            ))
                            : <li className="workspace-item" style={{color: 'rgba(255,255,255,0.6)', fontSize: '14px'}}>
                                No tienes workspaces
                            </li>
                        }
                    </ul>
                </div>
            </aside>

            <main className="main-content">
                <div className="top-bar">
                    <h1>Bienvenido nuevamente</h1>
                </div>
                
                <div className="content-area">
                    {workspace_list_error && <div className="error-message">{workspace_list_error.message}</div>}
                    
                    <div className="welcome-section">
                        <h2>Tus espacios de trabajo</h2>
                        <p>Selecciona un espacio para comenzar a colaborar</p>

                        {workspace_list.data.workspaces && workspace_list.data.workspaces.length > 0 
                            ? <div className="workspaces-grid">
                                {workspace_list.data.workspaces.map(workspace => (
                                    <div key={workspace.workspace_id} className="workspace-card">
                                        <div className="workspace-card-header">
                                            <div className="workspace-card-icon">
                                                {workspace.workspace_title.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="workspace-card-title">{workspace.workspace_title}</div>
                                                <div className="workspace-card-role">Rol: {workspace.member_role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                              </div>
                            : <div className="empty-state">
                                <div className="empty-state-icon">💼</div>
                                <h3>No tienes espacios de trabajo</h3>
                                <p>Crea tu primer espacio para comenzar a colaborar con tu equipo</p>
                                <Link to="/create-workspace">
                                    <button className="create-workspace-btn">Crear un espacio de trabajo</button>
                                </Link>
                              </div>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomeScreen