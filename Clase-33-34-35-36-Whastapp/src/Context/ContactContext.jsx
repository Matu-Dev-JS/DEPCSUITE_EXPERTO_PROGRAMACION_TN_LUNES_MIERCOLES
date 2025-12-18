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
        updated_contact, //Un objeto simil a un contacto con algunas modificaciones (ejemplo, el nombre)
        contact_id_to_update //UN numero que representa el id del contacto que queremos actualizar
    ){
        //Crean un nuevo array a partir del clone donde el contacto que tenga un id igual al pasado por parametro se reemplaze por updated_contact
        //Setear el resultado como un nuevo estado de contactos
        //TIP: Recuerden que para crear un array a partir de otro existe el metodo de array (MAP)
        const contacts_updated = contacts.map(
            (contact) => {
                if(Number(contact.contact_id) === contact_id_to_update){
                    return updated_contact
                }
                return contact
            }
        )

        /*    
        Alternativa sin map
        const contacts_updated = [...contacts]
        const indexToReplace = contacts_updated.findIndex((contact) => contact.contact_id === contact_id_to_update)
        contacts_updated.slice(indexToReplace, 1, updated_contact) 
        */

        setContacts(contacts_updated)
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