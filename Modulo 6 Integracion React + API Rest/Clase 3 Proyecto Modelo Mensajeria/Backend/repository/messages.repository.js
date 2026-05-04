import ChannelMessages from "../models/ChannelsMessages.model.js";

class MessagesRepository{
    async create(member_id, content, channel_id){
        return await ChannelMessages.create({
            fk_workspace_member_id: member_id,
            mensaje: content,
            fk_workspace_channel_id: channel_id
        })
    }

    async getAllByChannelId (channel_id){
        const messages = await ChannelMessages.find({fk_workspace_channel_id: channel_id})
        .populate(
            {
                path: 'fk_workspace_member_id',
                select: 'role fk_id_user',
                populate: {
                    path: 'fk_id_user',
                    select: 'username email'
                }
            }
        )
       
        return messages
    }
}

const messagesRepository = new MessagesRepository()
export default messagesRepository