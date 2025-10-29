
/* 
Necesito capturar de la URL el contacto_id y dark_mode
*/
console.log(window.location.search);

//Con URLSearchParams puedo manipular la URL y los parametros de busqueda
const urlSearchParams = new URLSearchParams(window.location.search);
const contactoId = urlSearchParams.get('contacto_id');
const darkMode =  urlSearchParams.get('dark_mode');

console.log(contactoId, darkMode)


const contactos = [
    {
        id: 1,
        name: 'Contacto 1',
        unseen_messages: 5,
        last_message: 'Hola, ¿cómo estás?',
        last_message_date: '2025-10-29T10:00:00',
        image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
    },
    {
        id: 2,
        name: 'Contacto 2',
        unseen_messages: 3,
        last_message: '¿Te encuentras bien?',
        last_message_date: '2022-01-02T14:30:00',
        image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
    },
    {
        id: 3,
        name: 'Contacto 3',
        unseen_messages: 0,
        last_message: '¡Hola!',
        last_message_date: '2022-01-03T09:15:00',
        image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
    },
    {
        id: 4,
        name: 'Contacto 4',
        unseen_messages: 2,
        last_message: '¿Qué tal?',
        last_message_date: '2022-01-04T11:45:00',
        image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
    },
    {
        id: 5,
        name: 'Contacto 5',
        unseen_messages: 1,
        last_message: 'Hola',
        last_message_date: '2022-01-05T16:00:00',
        image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
    }
];

/* 
Crear una funcion llamada obtener contacto por id
Buscar al contacto por ID
Renderizar los detalles del contacto buscado en el HTML con una funcion llamada renderContactDetail
*/