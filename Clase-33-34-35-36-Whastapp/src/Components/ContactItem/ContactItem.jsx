import React, { useContext } from 'react'
import { Link } from 'react-router'
import { getDateFormated } from '../../utils/formatDate'
import './ContactItem.css'
import { ThemeContext } from '../../Context/ThemeContext'

export default function ContactItem({ contact }) {

    const {isDarkMode} = useContext(ThemeContext)
    
    const {last_message_created_at} = contact
    console.log(last_message_created_at)
    const date = new Date('2021-01-01T00:00:00.000Z')
    console.log(date.getDate() + '/' + ( date.getMonth() + 1 ) + '/' + date.getFullYear())
    let h3Class = 'subtitle-contact'
    if(isDarkMode){
        h3Class = h3Class + ' subtitle-contact-dark-mode'
    }
    return (
        <Link 
            to={`/contact/${contact.contact_id}`} 
            className={
                isDarkMode 
                ? 'link-dark-mode' 
                : 'link-light-mode'
            } 
        >
            <img src={contact.contact_avatar} alt={contact.contact_name} width={50} />
            <h3 className={h3Class}>{contact.contact_name}</h3>
            <p>{contact.last_message_content}</p>
            <p>{getDateFormated(last_message_created_at)}</p>
        </Link>
    )
}