import React, { useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import { getContactsList } from '../../services/contactService'

export default function ContactSidebar() {
    const [contacts, setContacts] = useState(null)
    const [loadingContacts, setLoadingContacts] = useState(true)

    function loadContacts (){
        setLoadingContacts(true)
        setTimeout(
            function (){
                const contacts_list_response = getContactsList()
                setContacts(contacts_list_response)
                setLoadingContacts(false)
            },
            2000
        )
    }

    useEffect(
        loadContacts,
        []
    )

    console.log(
        'Cargando', loadingContacts,
        'Contact list', contacts
    )
    /* 
    Comunicar la lista de contactos al ConctactList component
    Renderizar la lista de contactos (No hacen falta estilos en esta etapa)
    */

    return (
        <div>
            <ContactList/>
        </div>
    )
}
