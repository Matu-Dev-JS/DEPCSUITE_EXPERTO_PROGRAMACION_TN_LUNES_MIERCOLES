//Diccionario donde guardo la configuracion como el % de iva
const CONFIGURATION = {
    IVA: 21
}



/**
 * Calcula el IVA de un precio
 * @param {number} precio el precio sin IVA
 * @return {number} el IVA del precio
 */
function calcularIva(precio) {
    return precio * CONFIGURATION.IVA / 100;
}


// Obtener el elemento del DOM con el ID "caja-1"
const caja1 = document.getElementById("caja-1");

// Crear un elemento de tipo parrafo (p) con el texto "Hola Mundo"
const holaMundo = document.createElement("p");
holaMundo.textContent = "Hola Mundo";

// Añadir el elemento de texto al div con el ID "caja-1"
caja1.appendChild(holaMundo);



const messages = [
    {
        id: 1,
        author: "John Doe",
        content: "Hola, ¿cómo estás?",
        created_at: new Date().toISOString()
    },
    {
        id: 2,
        author: "Jane Smith",
        content: "Estoy bien, gracias. ¿Y tú?",
        created_at: new Date(Date.now() - (60 * 60 * 1000)).toISOString()
    },
    {
        id: 3,
        author: "Bob Johnson",
        content: "¡Hola! ¿Qué pasa?",
        created_at: new Date(Date.now() - (2 * 24 * 60 * 60 * 1000)).toISOString()
    },
    {
        id: 4,
        author: "Alice Brown",
        content: "Estoy cansado. Necesito dormir.",
        created_at: new Date(Date.now() - (3 * 24 * 60 * 60 * 1000)).toISOString()
    },
    {
        id: 5,
        author: "Mike Davis",
        content: "Me encanta la programación. ¡Es genial!",
        created_at: new Date(Date.now() - (4 * 24 * 60 * 60 * 1000)).toISOString()
    },
    {
        id: 6,
        author: "Emma Taylor",
        content: "Me gusta leer libros. Me ayuda a aprender más.",
        created_at: new Date(Date.now() - (5 * 24 * 60 * 60 * 1000)).toISOString()
    },
    {
        id: 7,
        author: "David Wilson",
        content: "Me gusta viajar. Me encanta descubrir nuevos lugares.",
        created_at: new Date(Date.now() - (6 * 24 * 60 * 60 * 1000)).toISOString()
    },
    {
        id: 8,
        author: "Sarah Martinez",
        content: "Me gusta hacer ejercicio. Ayuda a mantenerme saludable.",
        created_at: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).toISOString()
    },
    {
        id: 9,
        author: "Chris Anderson",
        content: "Me gusta escuchar música. Me ayuda a relajarme.",
        created_at: new Date(Date.now() - (8 * 24 * 60 * 60 * 1000)).toISOString()
    },
    {
        id: 10,
        author: "Lisa Johnson",
        content: "Me gusta cocinar. Me encanta crear nuevos platos.",
        created_at: new Date(Date.now() - (9 * 24 * 60 * 60 * 1000)).toISOString()
    }
];


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



function formatDateHHMM(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function formatDateDDOfMMOfYYYY(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day} de ${getMonthName(month)} de ${year}`;
}

function getMonthName(monthNumber) {
    const monthNames = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    if (monthNumber < 1 || monthNumber > 12) {
        return "Número de mes inválido";
    }

    return monthNames[monthNumber - 1];
}


function formatDate(dateString) {
    //Pasamos el string a fecha, esta es la fecha del ultimo mensaje
    const date = new Date(dateString);

    //Obtenemos la fecha actual
    const today = new Date();

    //Obtenemos la fecha actual y le restamos 1 dia osea que es ayer
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    //Obtenemos la fecha actual y le restamos 2 dia osea que es antes de ayer
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 2);

    if (date.toDateString() === today.toDateString()) {
        // Hoy
        return 'hoy a las ' + formatDateHHMM(dateString)

    } else if (date.toDateString() === yesterday.toDateString()) {
        // Ayer
        return 'ayer';

    } else if (date < threeDaysAgo) {
        // Antes de ayer
        return formatDateDDOfMMOfYYYY(dateString);
    } else {
        // Fecha distinta
        return 'Fecha distinta';
    }
}





/* 
Desafios:

1: Renderizar la lista de contactos en la pagina (Sin estilos)
2: cada contacto estara dentro de un <a></a> que redireccionara hacia /contacto?contacto_id=${contact.id}

Reglas:
    Deben estar estas funciones
        -renderContactos()
        -setContactos
*/

const contactosContainer = document.getElementById('contactos-container');

function renderContactos() {
    let html = '';
    for (const contacto of contactos) {
        html += `
            <a href="/contacto.html?contacto_id=${contacto.id}&dark_mode=true">
                <h3>${contacto.name}</h3>
                <p>Unseen messages: ${contacto.unseen_messages}</p>
                <p>Last message: ${contacto.last_message}</p>
                <p>Last message date: ${formatDate(contacto.last_message_date)}</p>
                <img src="${contacto.image}" alt="${contacto.name}">
            </a>
        `;
    }

    contactosContainer.innerHTML = html;
}

renderContactos()