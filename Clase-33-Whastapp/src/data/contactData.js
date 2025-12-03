const contacts_data = [
    {
        contact_id: 1,
        contact_name: 'Laura',
        contact_avatar: 'https://www.seoptimer.com/storage/images/2014/08/no-con-la-mascota.jpg',
        last_message_created_at: new Date(),
        last_message_content: 'Hola que tal',
        last_message_status: 'NOT_RECEIVED' /* 'SEEN' | 'UNSEEN' */
    },
    {
        contact_id: 2,
        contact_name: 'Yoda',
        contact_avatar: 'https://static.wikia.nocookie.net/esstarwars/images/4/45/Yoda.jpg/revision/latest?cb=20090507210712',
        last_message_created_at: new Date(),
        last_message_content: 'Saludar tu debes',
        last_message_status: 'SEEN' /* 'SEEN' | 'UNSEEN' */
    },
]

export default contacts_data