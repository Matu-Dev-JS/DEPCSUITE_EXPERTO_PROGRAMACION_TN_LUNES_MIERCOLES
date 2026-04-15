import mongoose from "mongoose";
import LOG_SEVERITY from "../constants/logsSeverity.constant.js";

const auditLogSchema = new mongoose.Schema(
    {
        request_id: String,
        user_id: {
            ref: 'User',
            type: mongoose.Schema.Types.ObjectId,
            default: null
        },
        action: { type: String, required: true },
        entity: String,
        entity_id: String,
        method: String,
        endpoint: String,
        user_agent: String,
        severity: {
            type: String,
            enum: [
                LOG_SEVERITY.INFO,
                LOG_SEVERITY.WARN,
                LOG_SEVERITY.ERROR,
                LOG_SEVERITY.CRITICAL
            ],
            default: LOG_SEVERITY.INFO
        },
        details: {
            type: mongoose.Schema.Types.Mixed,
            default: {}
        },
        success: Boolean
    },
    { timestamps: true }
)

const AuditLog = mongoose.model(
    'AuditLog',
    auditLogSchema
)

export default AuditLog