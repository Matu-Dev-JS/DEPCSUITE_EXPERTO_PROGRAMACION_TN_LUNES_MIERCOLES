import React from 'react'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import { getDateFormated } from '../../utils/formatDate'
import Messages from '../../Components/Messages/Messages'

export default function ContactDetailScreen() {
    const objeto_parametros_url = useParams()
    const contact_id = Number(objeto_parametros_url.contact_id)
    /* 
    Como podriamos obtener el contacto a partir del contact_id? 
    */
    const contact_seleccionado = getContactById(contact_id)

    if(!contact_seleccionado){
        return (
            <div>
                <h2>Contacto no encontrado</h2>
            </div>
        )
    }

    console.log(contact_seleccionado.messages)


    /* 
    Crear mensajes en cada contacto (en contactData.js)
    Renderizar la lista de mensajes en un componente llamado MessagesList (No hace falta estilos en esta etapa)
    (Recomendacion: Hacer el MessageItem para renderizar un mensaje)
    */

  return (
    <div>
        <h1>Detalle contacto</h1>
        <h2>Contacto seleccionado: {contact_seleccionado.contact_name}</h2>
        <Messages messages={contact_seleccionado.messages}/>
    </div>
  )
}


