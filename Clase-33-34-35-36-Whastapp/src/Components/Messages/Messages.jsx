import React, { useContext } from 'react'
import { getDateFormated } from '../../utils/formatDate'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

export default function Messages() {
    const {contactSelected} = useContext(ContactDetailContext)

    if(contactSelected.messages.length === 0){
        return <div>No tienes mensajes</div>
    }
    return (
        <div>
            {
                contactSelected.messages.map((message) => {
                    return <div key={message.message_id}>
                        <p>{message.message_content}</p>
                        <span>{getDateFormated(message.message_created_at)}</span>
                    </div>
                })
            }
        </div>
    )
}
