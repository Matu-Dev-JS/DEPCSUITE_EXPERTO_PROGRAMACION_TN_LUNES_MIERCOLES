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
        if(!contacts || loadingContacts){
            return null
        }
        for(const contact of contacts){
            if(Number(contact_id) === Number(contact.contact_id)){
                return contact
            }
        }
    }

    function updateContactById (
        update_contact_object,
        contact_id_to_update
    )
    {
        setContacts(
            (currentContactsList) => {
                const updatedContactsList = currentContactsList.map(
                    (contact) => {
                        if (Number(contact.contact_id) === Number(contact_id_to_update)) {
                            return { ...contact, ...update_contact_object }
                        } else {
                            return contact
                        }
                    }
                )
                return updatedContactsList
            }
        )
    }

    useEffect(
        loadContacts,
        []
    )

    const providerValues = {
        loadingContacts,
        contacts,
        loadContacts,
        getContactById,
        updateContactById
    }
    return (
        <ContactContext.Provider
            value={providerValues}
        >
            <Outlet/>
        </ContactContext.Provider>
    )
}