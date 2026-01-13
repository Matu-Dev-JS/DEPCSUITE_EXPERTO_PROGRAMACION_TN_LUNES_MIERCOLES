import React, { useContext, useState } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

const NewMessageForm = () => {
    const FIELD_NAMES = {
        NEW_MESSAGE: "new_message"
    }
    //Ejemplo de formulario controlado
    /* 
    Tener un estado que guarde el estado del formulario (osea que campos tiene y que valor tiene cada campo)
    */

    //Guardamos como es nuestro estado de formulario
    const initialState = {
        [FIELD_NAMES.NEW_MESSAGE]: ''
    }

    //Creamos el estado donde vamos a guardar nuestros valores de formulario
    const [formState, setFormState] = useState(initialState)

    //Esta funcion se llama cada vez que el input cambia de valor
    function onUpdateInput (event) {
        //El event.target es el elemento del cual se disparo el evento
        const field_name = event.target.name // 'new_message' por ejemplo
        const field_value = event.target.value // el nuevo valor
        setFormState(
            (currentFormState) => {
                return {
                    ...currentFormState, 
                    [field_name]: field_value
                }
            }
        )
    }

    console.log('Valor del estado de formulario', {formState})

    const {addNewMessage, contactSelected} = useContext(ContactDetailContext)
    console.log({contactSelected})

    function sendMessage (event){
        event.preventDefault()
        //Creamos el mensaje
        console.log(formState)
        addNewMessage(formState[FIELD_NAMES.NEW_MESSAGE])
        //Resetamos el form
        setFormState(initialState)
    }
  return (
    <form onSubmit={sendMessage}>
        <label>Ingresa tu mensaje</label>
        <textarea 
            name={FIELD_NAMES.NEW_MESSAGE} 
            onChange={onUpdateInput} 
            value={formState[FIELD_NAMES.NEW_MESSAGE]}
        ></textarea>
        <button>Enviar mensaje</button>
    </form>
  )
}

export default NewMessageForm