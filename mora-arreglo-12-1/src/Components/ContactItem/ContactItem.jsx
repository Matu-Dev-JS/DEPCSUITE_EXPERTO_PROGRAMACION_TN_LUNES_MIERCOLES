import React, { useContext } from 'react'
import { Link } from 'react-router'
import './contactItem.css'
import { ThemeContext } from '../../Contexts/themeContexts.jsx'
export default function ContactItem({ contact }) {
    const {isDarkMode} = useContext(ThemeContext)
    console.log(isDarkMode)
    const { last_message_created_at } = contact
    console.log(last_message_created_at)
    const date = new Date('2021-01-01T00:00:00.000Z')
    console.log(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())
    
    return (
        <Link to={`/contact/${contact.contact_id}`}
            className={isDarkMode ? ' dark-mode' : 'light-mode'}>
                <img src={contact.contact_avatar} alt={contact.contact_name} width={50} />
                <h3>{contact.contact_name}</h3>
                <p>{contact.last_message_content.toString()}</p>
            
        </Link>
    )
  
}
