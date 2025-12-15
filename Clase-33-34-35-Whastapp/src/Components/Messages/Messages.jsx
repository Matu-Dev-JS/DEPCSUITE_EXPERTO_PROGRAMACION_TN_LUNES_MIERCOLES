import React from 'react'
import { getDateFormated } from '../../utils/formatDate'

export default function Messages({messages}) {
    if(messages.length === 0){
        return <div>No tienes mensajes</div>
    }
  return (
    <div>
        {
            messages.map((message) => {
                return <div key={message.message_id}>
                    <p>{message.message_content}</p>
                    <span>{getDateFormated(message.message_created_at)}</span>
                </div>
            })
        }
    </div>
  )
}
