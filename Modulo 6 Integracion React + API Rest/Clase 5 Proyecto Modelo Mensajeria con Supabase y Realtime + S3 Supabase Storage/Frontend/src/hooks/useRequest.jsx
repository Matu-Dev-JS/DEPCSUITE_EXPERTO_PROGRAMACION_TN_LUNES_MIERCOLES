import { useState } from "react"

function useRequest (){
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    async function sendRequest (requestCallback) {
        try{
            setLoading(true)
            setResponse(null)
            setError(null)
            const response = await requestCallback()
            setResponse(response)
        }
        catch(error){
            if(error.status){
                setError(error)
            }
            else{
                setError(
                    {
                        message: 'Ha ocurrido una excepcion'
                    }
                )
            }
        }
        finally{
            setLoading(false)
        }
    }

    return {
        loading,
        response,
        error,
        sendRequest
    }
}

export default useRequest