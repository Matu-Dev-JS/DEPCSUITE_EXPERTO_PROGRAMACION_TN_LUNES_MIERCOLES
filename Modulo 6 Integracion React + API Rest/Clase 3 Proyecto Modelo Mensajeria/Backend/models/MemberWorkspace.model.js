import mongoose from "mongoose";

const MemberWorkspaceSchema = new mongoose.Schema(
    {
        fk_id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        fk_id_workspace: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        role: {
            type: String,
            enum: ['Owner', 'Admin', 'User'],
            default: 'User',
            required: true
        }
    }
)

const MemberWorkspace = mongoose.model('MemberWorkspace', MemberWorkspaceSchema)
export default MemberWorkspace