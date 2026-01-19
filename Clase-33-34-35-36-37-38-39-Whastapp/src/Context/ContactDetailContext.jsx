/* 
Crear el contexto:
Sera un contexto que trabajara a nivel de ruta
Trabajara sobre <Route path='/contact/:contact_id' element={<ContactDetailContext/>}>
Llamara al contact_id de la url usando useParams
Tendra una VARIABLE interna llamada contact_selected (Guardara el contacto seleccionado) 
Debe proveer:
    - contactSelected
*/

import { createContext, useContext } from "react";
import { ContactContext } from "./ContactContext";
import { Outlet, useParams } from "react-router";

export const ContactDetailContext = createContext(
    //Los valores inciales de mi contexto
    {
        contactSelected: null
    }
)

function ContactDetailContextProvider (){
    const {getContactById, updateContactById} = useContext(ContactContext)



    //Esto nos permite caputrar parametros de busqueda en la URL
    const {contact_id} = useParams()

    const contactSelected = getContactById(contact_id)

    
    function addNewMessage (new_message_text){
        const new_message = {
            message_id: contactSelected.messages.length + 1,
            message_content: new_message_text,
            message_status: 'UNSEEN',
            message_created_at: new Date(),
            send_by_me: true
        }
        console.log(new_message)
        updateContactById(
            {messages: [...contactSelected.messages, new_message]},
            contact_id
        )
    }

    const providerValues = {
        contactSelected: contactSelected,
        addNewMessage: addNewMessage
    }


    return (

        <ContactDetailContext.Provider 
            value={providerValues}
        >
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider