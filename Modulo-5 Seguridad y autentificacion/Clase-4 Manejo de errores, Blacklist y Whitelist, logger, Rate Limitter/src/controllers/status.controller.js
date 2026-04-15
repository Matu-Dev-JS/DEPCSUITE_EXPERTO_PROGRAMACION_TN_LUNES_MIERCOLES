import LOG_SEVERITY from "../constants/logsSeverity.constant.js"
import ServerError from "../helpers/serverError.helper.js"
import logAction from "../services/audit.service.js"

/* 
El controlador tiene la responsabilidad de manejar las consultas al servidor y emitir respuestas
*/
class StatusController {
    async get(request, response, next) {
        try {
            await logAction(
                request,
                {
                    action: 'GET status',
                    entity: 'Status',
                    entity_id: null,
                    detail: 'Es un get',
                    severity: LOG_SEVERITY.INFO,
                    success: true
                }
            )
            response.status(200).send(
                {
                    ok: true,
                    message: "Api funcionando correctamente",
                    status: 200 //Este estatus NO es Obligatorio pero muchas APIs suelen re-aclarar el status via body
                }
            )
        }
        catch (error) {
            next(error)
        }

    }
}


const statusController = new StatusController()

export default statusController