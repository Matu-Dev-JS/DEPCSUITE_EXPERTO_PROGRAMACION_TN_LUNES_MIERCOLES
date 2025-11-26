import { useState } from "react"
import { limitarPalabras } from "../../utils/text"

function ParrafoExtendible (props){
    let parrafo = props.parrafo
    let limite_palabras = props.limite_palabras || 10
    /* 
    estaExtendido es un estado PORQUE si modifico su valor, debera volver a cargar el componente
    */
    /* 
    useState crea estados
    useState recibira el valor incial de mi estado
    retornara un array de 2 valores
        El primer elemento es el valor de mi estado
        El segundo elemento es la funcion setter para modificar mi estado
            OJO que esta funcion al invocarla nos permitira cambiar el valor del estado PERO TAMBIEN RE-RENDERIZARA MI COMPONENTE
        
    LOS ESTADOS SON INMUTABLES
    */
    const state = useState(true)
    const estaExtendidoValue = state[0]
    const setEstaExtendido = state[1]

    

    function extenderParrafo(){
        setEstaExtendido(true)
    }

    function achicarParrafo(){
        setEstaExtendido(false)
    }

   

    return (
        <div>
            <p>
                {
                    estaExtendidoValue
                    ? parrafo
                    : limitarPalabras(parrafo, limite_palabras) + '...'
                }
            </p>
            {
                estaExtendidoValue 
                ? <button onClick={achicarParrafo}>Ver menos</button>
                : <button onClick={extenderParrafo}>Ver mas</button>
            }
        </div>
        
    )
}

export default ParrafoExtendible