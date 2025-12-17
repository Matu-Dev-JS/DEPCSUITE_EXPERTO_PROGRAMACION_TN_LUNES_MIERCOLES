import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactsList } from "../services/contactService";


export const ContactContext = createContext()

export default function ContactContextProvider (){

    const [contacts, setContacts] = useState(null)
    const [loadingContacts, setLoadingContacts] = useState(true)

    function loadContacts (){
        setLoadingContacts(true)
        setTimeout(
            function (){
                const contacts_list_response = getContactsList()
                setContacts(contacts_list_response)
                setLoadingContacts(false)
            },
            2000
        )
    }

    function getContactById (contact_id){
        for(const contact of contacts){
            if(Number(contact_id) === Number(contact.id)){
                return contact
            }
        }
    }

    useEffect(
        loadContacts,
        []
    )

    console.log(
        'Cargando', loadingContacts,
        'Contact list', contacts
    )

    const providerValues = {
        loadingContacts,
        contacts,
        loadContacts,
        getContactById
    }
    return (
        <ContactContext.Provider
            value={providerValues}
        >
            <Outlet/>
        </ContactContext.Provider>
    )
}