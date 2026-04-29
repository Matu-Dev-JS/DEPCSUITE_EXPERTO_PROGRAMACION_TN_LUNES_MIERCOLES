/* 
Las funciones asociadas a la autenticacion
*/


async function login({ email, password }) {
    /* 
        Esta funcion nos permite indicar al navegador que debe enviar solicitudes http
    
        Esta funcion es clave porque es la principal implicada a la hora de comunicarnos con el backend, debido a que el backend es un servicio externo al cliente y por ende solo sera accedido via internet (http)
    
        Fetch recibe una direccion web del recurso que debe consultar
    */
    const body_json = JSON.stringify(
        {
            email,
            password
        }
    )
    const response_http = await fetch(
        //Direccion de consulta
        'http://localhost:8080/api/auth/login',
        {
            //Metodo de la consulta
            method: "POST",
            headers: {
                //Le indicamos al servidor el tipo de dato del body de la consulta
                "Content-Type": "application/json"
            },
            //Contenido de la consulta
            body: body_json
        }
    )


    const response = await response_http.json()
    if (response.ok) {
        return response
    }
    else {
        throw new Error(response.message)
    }


}


export { login }