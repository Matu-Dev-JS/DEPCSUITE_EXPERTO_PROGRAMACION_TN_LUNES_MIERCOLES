import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { supabase } from '../../supabaseClient';
import './ChannelScreen.css';

const ChannelScreen = () => {
    const { workspace_id } = useParams();
    const navigate = useNavigate();
    
    const [workspace, setWorkspace] = useState(null);
    const [channels, setChannels] = useState([]);
    const [activeChannel, setActiveChannel] = useState(null);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [user, setUser] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const fetchWorkspaceData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);

            const { data: ws } = await supabase.from('workspaces').select('*').eq('id', workspace_id).single();
            setWorkspace(ws);

            const { data: chs } = await supabase.from('channels').select('*').eq('workspace_id', workspace_id).order('created_at');
            setChannels(chs || []);
            if (chs && chs.length > 0) {
                setActiveChannel(chs[0]);
            }

            const { data: mems } = await supabase
                .from('workspace_members')
                .select('user_id, profiles(username)')
                .eq('workspace_id', workspace_id);
            setMembers(mems || []);
        };
        fetchWorkspaceData();
    }, [workspace_id]);

    useEffect(() => {
        if (!activeChannel) return;

        const fetchMessages = async () => {
            const { data: msgs } = await supabase
                .from('messages')
                .select('*, profiles(username)')
                .eq('channel_id', activeChannel.id)
                .order('created_at', { ascending: true });
            setMessages(msgs || []);
        };
        fetchMessages();

        const subscription = supabase
            .channel(`channel_${activeChannel.id}`)
            .on('postgres_changes', { 
                event: 'INSERT', 
                schema: 'public', 
                table: 'messages',
                filter: `channel_id=eq.${activeChannel.id}`
            }, async (payload) => {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('username')
                    .eq('id', payload.new.user_id)
                    .single();

                const newMsg = { ...payload.new, profiles: profile };
                setMessages((prev) => [...prev, newMsg]);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, [activeChannel]);

    const handleCreateChannel = async () => {
        const name = prompt("Nombre del nuevo canal (ej: frontend, anuncios):");
        if (!name || name.trim() === '') return;
        const channelName = name.trim().toLowerCase().replace(/\s+/g, '-');
        
        const { data, error } = await supabase.from('channels').insert([{ workspace_id, name: channelName }]).select().single();
        if (data) {
            setChannels([...channels, data]);
            setActiveChannel(data);
        }
    };

    const handleAddMember = async () => {
        const username = prompt("Nombre de usuario exacto a invitar:");
        if (!username) return;
        
        const { data: profile } = await supabase.from('profiles').select('id, username').eq('username', username).single();
        if (!profile) {
            alert("No se encontró ningún usuario con ese nombre.");
            return;
        }

        const exists = members.find(m => m.user_id === profile.id);
        if (exists) {
            alert("El usuario ya es miembro de este espacio.");
            return;
        }

        const { error } = await supabase.from('workspace_members').insert([{ workspace_id, user_id: profile.id }]);
        if (error) {
            alert("Error al agregar miembro: " + error.message);
        } else {
            setMembers([...members, { user_id: profile.id, profiles: { username: profile.username } }]);
        }
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !activeChannel || !user) return;

        await supabase.from('messages').insert([{
            channel_id: activeChannel.id,
            user_id: user.id,
            content: newMessage.trim()
        }]);

        setNewMessage('');
    };

    if (!workspace) return <div className="slack-loading">Cargando el espacio de trabajo...</div>;

    return (
        <div className="slack-container">
            {/* Sidebar */}
            <aside className="slack-sidebar">
                <div className="slack-sidebar-header">
                    <h1 className="workspace-title">{workspace.name}</h1>
                    <Link to="/home" className="slack-back-btn">← Volver</Link>
                </div>

                <div className="slack-nav-section">
                    <div className="section-header">
                        <span>Canales</span>
                        <button className="add-btn" onClick={handleCreateChannel}>+</button>
                    </div>
                    <ul className="slack-list">
                        {channels.map(ch => (
                            <li 
                                key={ch.id} 
                                className={`slack-list-item ${activeChannel?.id === ch.id ? 'active' : ''}`}
                                onClick={() => setActiveChannel(ch)}
                            >
                                <span className="hash">#</span> {ch.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="slack-nav-section">
                    <div className="section-header">
                        <span>Miembros</span>
                        <button className="add-btn" onClick={handleAddMember}>+</button>
                    </div>
                    <ul className="slack-list">
                        {members.map(m => (
                            <li key={m.user_id} className="slack-list-item member-item">
                                <div className="status-indicator online"></div>
                                {m.profiles?.username || 'Usuario'}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Main Chat Area */}
            <main className="slack-main">
                {activeChannel ? (
                    <>
                        <header className="slack-chat-header">
                            <h2><span className="hash">#</span> {activeChannel.name}</h2>
                        </header>
                        
                        <div className="slack-messages">
                            {messages.length === 0 ? (
                                <div className="empty-chat">
                                    <h3>Este es el principio del canal #{activeChannel.name}.</h3>
                                    <p>Envía un mensaje para saludar.</p>
                                </div>
                            ) : (
                                messages.map((msg, index) => {
                                    const showHeader = index === 0 || messages[index - 1].user_id !== msg.user_id;
                                    return (
                                        <div key={msg.id} className={`slack-message ${showHeader ? 'mt-3' : 'mt-1'}`}>
                                            {showHeader && (
                                                <div className="slack-avatar">
                                                    {(msg.profiles?.username || 'U').charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                            <div className={`slack-message-content ${!showHeader ? 'no-header' : ''}`}>
                                                {showHeader && (
                                                    <div className="slack-message-header">
                                                        <span className="author">{msg.profiles?.username || 'Usuario'}</span>
                                                        <span className="timestamp">
                                                            {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="text">{msg.content}</div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="slack-input-container">
                            <form onSubmit={sendMessage} className="slack-form">
                                <input 
                                    type="text" 
                                    value={newMessage} 
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder={`Enviar mensaje a #${activeChannel.name}`}
                                    className="slack-input"
                                />
                                <button type="submit" className="slack-send-btn" disabled={!newMessage.trim()}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="slack-no-channel">
                        <h2>Selecciona un canal para empezar</h2>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ChannelScreen;
