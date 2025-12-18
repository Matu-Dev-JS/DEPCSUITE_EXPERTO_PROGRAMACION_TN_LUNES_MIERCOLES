import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import { getDateFormated } from '../../utils/formatDate'
import Messages from '../../Components/Messages/Messages'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { ContactContext } from '../../Context/ContactContext'

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
    //A los 3 seg de ejecutarse el componente quiero que se modifique el nombre del contacto a ratatuille
    useEffect(
        () => {
            setTimeout(
                () => {
                    updateContactById(
                        {...contactSelected, contact_name: 'ratatoulle'},
                        contactSelected.contact_id
                    )
                },
                3000
            )
        },
        []
    )

  return (
    <div>
        <h1>Detalle contacto</h1>
        <h2>Contacto seleccionado: {contactSelected.contact_name}</h2>
        <Messages />
    </div>
  )
}


