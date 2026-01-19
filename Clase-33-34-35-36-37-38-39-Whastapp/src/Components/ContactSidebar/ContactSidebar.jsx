import React, { useState } from 'react'
import ContactList from '../ContactList/ContactList'
import './ContactSidebar.css'

export default function ContactSidebar() {
    return (
        <div className='contact-sidebar'>
            <div className='contact-sidebar_header'>
                <div className='contact-sidebar_header-profile'>
                    <svg viewBox="0 0 24 24" height="40" width="40" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="#dfe3e5" d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,18.5 c-2.915,0-5.467-1.428-7.067-3.644c0.05-2.314,1.868-4.175,4.148-4.249c-1.34-0.89-2.227-2.408-2.227-4.135 c0-2.761,2.239-5,5-5s5,2.239,5,5c0,1.727-0.887,3.245-2.227,4.135c2.28,0.074,4.098,1.935,4.148,4.249 C17.467,17.072,14.915,18.5,12,18.5z"></path></svg>
                </div>
                <div className='contact-sidebar_header-icons'>
                    <div className='contact-sidebar_header-icon'>
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.982.982 0 0 0 .179 1.12 10.05 10.05 0 0 0 14.308-.12.985.985 0 0 0 .148-1.164A10.07 10.07 0 0 0 12.072 1.761Zm1.71 16.5a.91.91 0 0 0 .845-.583 6.643 6.643 0 0 1 5.375-4.444.91.91 0 0 0 .749-.785 10.04 10.04 0 0 0-4.469-8.793.89.89 0 0 0-.964.062 6.626 6.626 0 0 1-8.156-.168.89.89 0 0 0-.94-.038 10.042 10.042 0 0 0-3.9 9.382.91.91 0 0 0 .817.755 6.62 6.62 0 0 1 5.253 4.542.913.913 0 0 0 .854.593v-3.722a2.3 2.3 0 0 1 2.268-2.296h.005a2.295 2.295 0 0 1 2.265 2.296v3.199Z"></path></svg>
                    </div>
                    <div className='contact-sidebar_header-icon'>
                         <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646Zm-4.989 9.869H7.041V11.1h6.975v1.944Zm3-4H7.041V7.1h9.975v1.944Z"></path></svg>
                    </div>
                    <div className='contact-sidebar_header-icon'>
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7Zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9Zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15Z"></path></svg>
                    </div>
                </div>
            </div>

            <div className='contact-sidebar_search'>
                <div className='search-container'>
                    <div className='search-icon'>
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M15.009 13.809h-.715l-.253-.244A5.81 5.81 0 0 0 15.4 9.631a5.82 5.82 0 1 0-5.82 5.82 5.81 5.81 0 0 0 3.933-1.359l.244.253v.715l3.879 3.879a.834.834 0 0 0 1.179 0 .834.834 0 0 0 0-1.179l-3.806-3.951Zm-5.429 0a4.17 4.17 0 1 1 4.17-4.17 4.17 4.17 0 0 1-4.17 4.17Z"></path></svg>
                    </div>
                    <input type="text" className='search-input' placeholder='Busca un chat o inicia uno nuevo.' />
                </div>
                <div style={{ paddingLeft: '10px', color: '#54656f', display: 'flex', alignItems: 'center' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" className=""><path fill="currentColor" d="M10 18.1h4v-2h-4v2Zm-7-6h18v-2H3v2Zm3-8v2h12v-2H6Z"></path></svg>
                </div>
            </div>

            <div className='contact-sidebar_list'>
                <ContactList />
            </div>
        </div>
    )
}
