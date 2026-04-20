
/* 
Queremos definir un nuevo tipo de error en nuestra aplicacion
Hasta ahora todos los errores solo son un mensaje descriptivo del error
Server error me va a permitir distinguir el tipo de error mediante el status, nosotros cuando desarrollamos APIs sabemos que tenemos distintos status de error, por ejemplo 404 Not found o 401 Unauthorized, 400 Bad Request

Dentro de el desarrollo de APIs hay 2 grandes grupos de errores (Esto se puede extrapolar a otras areas de la programacion)
1) Manejables, Controlados o Esperables
    Generalmente son: 
        - Algun dato no pasa la validacion
        - Cierto recurso no existe
        - El usuario hace algo que NO deberia hacer
        
2) Inesperados, Excepcionales, Inmanejables
    Generalmente son:
        - DB que no responde.
        - Saturamos algun servicio (o nos falta pagar).
        - Algun codigo con bugs que no se probo de punta a punta.
        - El net falla.
    Generalmente cuando el error es inesperado vamos a responder 500 Internal server error

*/

class ServerError extends Error {
    constructor(message, status){
        super(message)
        this.status = status
    }
}

export default ServerError

/* 
Error es una clase nativa de JS que se usa para definir errores del programa
Naturalmente los errores de JS se definen con Error
Error es una clase que instancia objetos con la propiedad 'message', la cual sera un mensaje descriptivo del error ocurrido

EJ:
    function calcularIva (precio){
        if(isNaN(precio)){
            throw new Error('Error, precio debe ser un numero')
        }
        if(precio <= 0){
            throw new Error('Error, precio debe ser un numero positivo')
        }
    }

    try {
        calcularIva('pepe')
    }
    catch(error){
        console.log(error.message)
    }
*/