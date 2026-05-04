import mongoose from "mongoose"

const channelMessagesSchema = new mongoose.Schema(
    {
        mensaje: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now   
        },
        fk_workspace_channel_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Channel',
            required: true
        },
        fk_workspace_member_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MemberWorkspace',
            required: true
        }
    }
)
const ChannelMessages= mongoose.model ("MessageChannel", channelMessagesSchema)
export default ChannelMessages