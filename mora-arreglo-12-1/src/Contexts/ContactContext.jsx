import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactsList } from '../services/contactService'

export const ContactContext = createContext()
export default function ContactContextProvider() {
    const [contacts, setContacts] = useState(null)
    const [loadingContacts, setLoadingContacts] = useState(true)

    function loadContacts() {
        setLoadingContacts(true)
        setTimeout(
            function () {
                //cuando cargue va a devolver la lista de contactos
                const contacts_list_response = getContactsList()
                setContacts(contacts_list_response)
                setLoadingContacts(false)
            },
            2000
        )
    }
    function getContactById(contact_id) {
        console.log('Buscando contacto por ID', contact_id);
        if (!contacts || loadingContacts) {
            return null
        }
        for (const contact of contacts) {
            if (Number(contact_id) === Number(contact.contact_id)) {
                return contact
            }
        }
    }
    function updateContactById(update_contact,//objeto simil a un contacto con algunaas modificaciones (ej nombre)
        contact_id_to_update)//un nombre que representa el id del contacto a modificar
    {
        const updated_contact = contacts.map(
            //MAP se ejecuta la misma cantidad de veces que elementos tiene el array REGLAA
            (contact) => {
                if(Number(contact.contact_id)===contact_id_to_update){
                    return update_contact
                }else
                {
                    return contact
                }
            }
        )
        setContacts(updated_contact)
    }
    //useEffect se ejecuta una sola vez
    useEffect(
        loadContacts,
        []
    )

    //TENER EN CUENTA
    console.log(
        'Cargando', loadingContacts,
        'Contact list', contacts
    )
    const providerValue = {
        loadingContacts,
        contacts,
        loadContacts,
        getContactById,
        updateContactById
    }
    return (
        <ContactContext.Provider
            value={providerValue}>
            <Outlet />
        </ContactContext.Provider>
    )
}

