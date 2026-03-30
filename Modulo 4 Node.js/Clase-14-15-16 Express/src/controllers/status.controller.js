
/* 
El controlador tiene la responsabilidad de manejar las consultas al servidor y emitir respuestas
*/
class StatusController {
    get(request, response) {
        const {suerte, nro_random} = request
        console.log("Suerte: " + suerte )
        console.log("Numero aleatorio generado: " + nro_random )
        response.status(200).send(
            {
                ok: true,
                message: "Api funcionando correctamente",
                status: 200 //Este estatus NO es Obligatorio pero muchas APIs suelen re-aclarar el status via body
            }
        )
    }
}


const statusController = new StatusController()

export default statusController