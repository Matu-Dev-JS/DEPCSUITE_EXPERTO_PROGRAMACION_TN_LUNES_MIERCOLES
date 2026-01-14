import React, { useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import { getContactsList } from '../../services/contactService'

export default function ContactSidebar() {
  

    return (
        <div>

            <ContactList />
            
        </div>
    )
}
