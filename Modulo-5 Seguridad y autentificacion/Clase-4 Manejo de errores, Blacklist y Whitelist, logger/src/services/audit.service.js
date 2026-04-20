import auditLogRepository from "../repository/auditLog.repository.js";

async function logAction(request, { action, entity, entity_id, detail, severity, success }) {
    await auditLogRepository.create(
        request.audit.request_id,
        request.audit.user_id,
        request.audit.user_agent,
        request.audit.method,
        request.audit.endpoint,
        action,
        entity,
        entity_id,
        detail,
        severity,
        success
    )
}

export default logAction