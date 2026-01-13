const contacts_data = [
    {
        contact_id: 1,
        contact_name: 'Jose',
        contact_avatar: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png',
        last_message_created_at: new Date(),
        last_message_content: 'Hola que tal',
        last_message_status: 'NOT_RECEIVED', /* 'SEEN' | 'UNSEEN' */
        mensajes:[
            {
                message_id: 1,
                message_content: 'Hola que tal',
                message_created_at: new Date(),
                message_status: 'SENT' /* 'SENT' | 'RECEIVED' | 'SEEN' */
            },
             {
                message_id: 2,
                message_content: 'No te olvides del informe',
                message_created_at: new Date(),
                message_status: 'SENT' /* 'SENT' | 'RECEIVED' | 'SEEN' */
            },
            {
                message_id: 3,
                message_content: 'es importante',
                message_created_at: new Date(),
                message_status: 'SENT' /* 'SENT' | 'RECEIVED' | 'SEEN' */
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'manuel',
        contact_avatar: 'https://www.argentina.gob.ar/sites/default/files/manuel_belgrano_2020.jpg',
        last_message_created_at: new Date(),
        last_message_content: 'Saludar tu debes',
        last_message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
        mensajes:[
            {
                message_id: 1,
                message_content: 'te guso la bandera que hice?',
                message_created_at: new Date(),
                message_status: 'SENT' /* 'SENT' | 'RECEIVED' | 'SEEN' */
            },
              {
                message_id: 2,
                message_content: 'espero que si',
                message_created_at: new Date(),
                message_status: 'SENT' /* 'SENT' | 'RECEIVED' | 'SEEN' */
            }, 
             {
                message_id: 3,
                message_content: 'Nos vemos pronto',
                message_created_at: new Date(),
                message_status: 'SENT' /* 'SENT' | 'RECEIVED' | 'SEEN' */
            }
        ]
    },
     {
        contact_id: 3,
        contact_name: 'Camila',
        contact_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYragrFQitrNjRDWKDXHXpvQeLYk3HXP2pGA&s',
        last_message_created_at: new Date(),
        last_message_content: 'Saludar tu debes',
        last_message_status: 'UNSEEN', /* 'SEEN' | 'UNSEEN' */
        mensajes:[
            {
                message_id: 1,
                message_content: 'mañana es mi cumpleaños',
                message_created_at: new Date(),
                message_status: 'SENT' /* 'SENT' | 'RECEIVED' | 'SEEN' */
            },
            {
                 message_id: 2,
                message_content: 'espero verte',
                message_created_at: new Date(),
                message_status: 'SENT' /* 'SENT' | 'RECEIVED' | 'SEEN' */
            }
        ]
    },
]

export default contacts_data