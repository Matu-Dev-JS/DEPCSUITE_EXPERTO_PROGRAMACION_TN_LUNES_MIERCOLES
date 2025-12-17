/* 
Crear el contexto:
Sera un contexto que trabajara a nivel de ruta
Trabajara sobre <Route path='/contact/:contact_id' element={<ContactDetailContext/>}>
Llamara al contact_id de la url usando useParams
Tendra una VARIABLE interna llamada contact_selected (Guardara el contacto seleccionado) 
*/

import { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { useParams } from "react-router";

function ContactDetailContext (){
    const {getContactById} = useContext(ContactContext)

    //Esto nos permite caputrar parametros de busqueda en la URL
    const {contact_id} = useParams()

    const contactSelected = getContactById(contact_id)
}