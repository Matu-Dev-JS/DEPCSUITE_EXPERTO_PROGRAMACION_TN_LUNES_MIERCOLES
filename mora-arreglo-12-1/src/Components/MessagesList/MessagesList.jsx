import React from 'react'
import { useContext } from 'react'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'

export default function MessagesList(props) {
    const {contactSelected}=useContext(ContactDetailContext);
    if(contactSelected.mensajes.length===0){
        return <div>No hay mensajes para este contacto</div>
    }
  return (
    <div>
        mensajes
        {
            contactSelected.mensajes.map(
                (mensajes)=>{
                    return(
                        <div key={mensajes.message_id}>
                            <p>{mensajes.message_content}</p>
                        </div>
                    )

                }
            )

        }

    </div>
  )
}

