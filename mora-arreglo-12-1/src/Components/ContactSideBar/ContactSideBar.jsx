import React, { useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import { getContactsList } from '../../services/contactService'
//CONTACTSIDEBAR es el componente Principal
export default function ContactSidebar() {
  
    /* 
    Comunicar la lista de contactos al ConctactList component
    Renderizar la lista de contactos (No hacen falta estilos en esta etapa)
        Tener en cuenta el cargando
        Tener en cuenta si la lista esta vacias
    */

    return (
        <div>
            <ContactList  />
           
        </div>
    )
}

