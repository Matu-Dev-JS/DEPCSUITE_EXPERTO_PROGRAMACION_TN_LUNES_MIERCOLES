import React, { useContext } from 'react'
import ContactItem from '../ContactItem/ContactItem'
import { ContactContext } from '../../Contexts/ContactContext'

export default function ContactList() {
    const {contacts, loadingContacts}= useContext(ContactContext)
    if(loadingContacts){
        return <div>
            Cargando contactos
        </div>
    }
    
    if( !contacts || contacts.length === 0 ){
        return <div>No tienes contactos</div>
    }
    
    return (
        <div>
            {
                contacts.map(
                    (contact) => {
                    return (
                        <ContactItem
                            
                            contact={contact}
                            key={contact.contact_id}
                        />
                    )
                })
            }
        </div>
    )
}
