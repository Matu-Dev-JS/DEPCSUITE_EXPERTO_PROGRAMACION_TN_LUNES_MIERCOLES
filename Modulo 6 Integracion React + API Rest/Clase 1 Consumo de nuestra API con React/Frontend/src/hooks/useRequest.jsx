import { useState } from "react"

function useRequest (){
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    //Funcion para enviar la peticion
    async function sendRequest( requestCb ){
        try{
            setLoading(true)
            setError(null)
    
            const response = await requestCb()
            setResponse(response)
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    return {
        response,
        error,
        loading,
        sendRequest
    }
}

export default useRequest