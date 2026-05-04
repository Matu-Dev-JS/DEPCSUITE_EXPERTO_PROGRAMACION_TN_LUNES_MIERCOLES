import messagesRepository from "../repository/messages.repository.js"

class MessagesController {
    async create(request, response) {
        const { content } = request.body
        const member_id = request.member._id
        const { channel_id } = request.params
        await messagesRepository.create(member_id, content, channel_id)

        return response.json(
            {
                ok: true,
                status: 201,
                message: 'Mensaje creado con exito'
            }
        )
    }

    async getByChannelId(request, response) {
        const { channel_id } = request.params
        const messages = await messagesRepository.getAllByChannelId(channel_id)
        return response.json(
            {
                ok: true,
                status: 200,
                message: 'Mensajes obtenidos con exito',
                data: {
                    messages
                }
            }
        )
    }
}

const messagesController = new MessagesController()

export default messagesController