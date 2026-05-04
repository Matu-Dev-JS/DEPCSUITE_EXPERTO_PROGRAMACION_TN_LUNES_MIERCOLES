import mongoose from "mongoose"

const channelSchema = new mongoose.Schema(
    {
    fk_id_workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
    }
)

const Channel = mongoose.model('Channel', channelSchema)
export default Channel