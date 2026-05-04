import { channelRepository } from "../repository/channel.repository.js"

class ChannelController {
    async getAllByWorkspaceId(request, response) {
        const { workspace_id } = request.params
        const channels = await channelRepository.getAllByWorkspaceId(workspace_id)
        response.json(
            {
                status: 200,
                ok: true,
                message: 'Canales obtenidos con exito',
                data: {
                    channels
                }
            }
        )
    }

    async create(request, response) {
        const { name } = request.body
        const { workspace_id } = request.params

        const channel_created = await channelRepository.create(workspace_id, name)
        response.json(
            {
                status: 201,
                ok: true,
                message: 'Canal creado con exito',
                data: {
                    channel_created
                }
            }
        )
    }
}

const channelController = new ChannelController()

export { channelController }