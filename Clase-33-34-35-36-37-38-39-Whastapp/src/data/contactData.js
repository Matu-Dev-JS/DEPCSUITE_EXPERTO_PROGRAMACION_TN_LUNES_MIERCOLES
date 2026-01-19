const contacts_data = [
    {
        contact_id: 1,
        contact_name: 'Laura',
        contact_avatar: 'https://www.seoptimer.com/storage/images/2014/08/no-con-la-mascota.jpg',
        last_message_created_at: new Date(),
        last_message_content: 'Hola que tal',
        last_message_status: 'NOT_RECEIVED', /* 'SEEN' | 'UNSEEN' */
        messages: [
            {
                message_id: 1,
                message_content: 'Saludar tu debes',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Lo se maestro',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 3,
                message_content: 'El lado oscuro php es',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 4,
                message_content: 'Sabias palabras maestro',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: true
            },
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Yoda',
        contact_avatar: 'https://static.wikia.nocookie.net/esstarwars/images/4/45/Yoda.jpg/revision/latest?cb=20090507210712',
        last_message_created_at: new Date(),
        last_message_content: 'Saludar tu debes',
        last_message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
        messages: [
            {
                message_id: 1,
                message_content: 'Saludar tu debes',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Lo se maestro',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 3,
                message_content: 'El lado oscuro php es',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 4,
                message_content: 'Sabias palabras maestro',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: true
            },
        ]
    },
]

export default contacts_data