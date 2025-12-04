import React from 'react'

export default function ContactItem({ contact }) {
    const {last_message_created_at} = contact
    console.log(last_message_created_at)
    const date = new Date('2021-01-01T00:00:00.000Z')
    console.log(date.getDate() + '/' + ( date.getMonth() + 1 ) + '/' + date.getFullYear())
    return (
        <div >
            <img src={contact.contact_avatar} alt={contact.contact_name} width={50} />
            <h3>{contact.contact_name}</h3>
            <p>{contact.last_message_content}</p>
        </div>
    )
}