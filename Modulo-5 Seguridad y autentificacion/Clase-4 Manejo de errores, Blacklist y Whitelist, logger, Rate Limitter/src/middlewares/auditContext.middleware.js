import crypto from 'crypto'

function auditContextMiddleware(request, res, next) {

    //Carga en la request contexto de auditoria, informacion acerca de esa consulta en particular
    request.audit = {
        request_id: crypto.randomUUID(),
        user_agent: request.headers['user-agent'],
        method: request.method,
        endpoint: request.originalUrl,
        userId: request?.user.id || null
    }

    next()
}

export default auditContextMiddleware