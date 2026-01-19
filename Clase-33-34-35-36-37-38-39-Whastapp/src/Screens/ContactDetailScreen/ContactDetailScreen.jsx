import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import { getDateFormated } from '../../utils/formatDate'
import Messages from '../../Components/Messages/Messages'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { ContactContext } from '../../Context/ContactContext'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'

export default function ContactDetailScreen() {
    const { contactSelected } = useContext(ContactDetailContext)
    
    
    if(!contactSelected){
        return (
            <div>
                <h2>Contacto no encontrado</h2>
            </div>
        )
    }
    const { updateContactById } = useContext(ContactContext)

  return (
    <div>
        <h1>Detalle contacto</h1>
        <h2>Contacto seleccionado: {contactSelected.contact_name}</h2>
        <button
            onClick={
                () => {
                    updateContactById(
                        {...contactSelected, contact_name: 'ratatoulle'},
                        contactSelected.contact_id
                    )
                }
            }
        >Cambiar</button>
        <Messages />
        <NewMessageForm/>
    </div>
  )
}


