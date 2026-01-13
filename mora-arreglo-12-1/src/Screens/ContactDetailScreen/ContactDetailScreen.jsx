import React, { use, useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { getContactById } from '../../services/contactService';
import MessagesList from '../../Components/MessagesList/MessagesList';
import { ContactDetailContext } from '../../Contexts/ContactDetailContext';
import { ContactContext } from '../../Contexts/ContactContext';


export default function ContactDetailScreen() {
    const { contactSelected } = useContext(ContactDetailContext);
  
    console.log('Contacto encontrado con Contexto', contactSelected);
    if (!contactSelected) {
        return <div>Contacto no encontrado</div>
    }
      const { updateContactById } = useContext(ContactContext);
    //A los 3 seg de ejecutarse el componente quiero que se modifique el nombre del contacto a ratatuille
    
    console.log('contacto despues de la actualizacion', contactSelected);
    return (
        <div>
            <h1>Contacto detallado</h1>
            <h2> Contacto Seleccionado: {contactSelected.contact_name}</h2>
            <button
                onClick={ 
                    () => {
                        updateContactById(
                            { ...contactSelected, contact_name: 'ratatoulle' },
                            contactSelected.contact_id
                        )
                    }
                }
            >
                cambiar
            </button>
            <div>
                <MessagesList mensajes={contactSelected.mensajes} />
            </div>
        </div>
    )
}

/*
Crear mensajes en cada contacto (en contactData.js)
Renderizar la lista de mensajes en un componente llamado MessagesList (No hace falta estilos en esta etapa)
*/
