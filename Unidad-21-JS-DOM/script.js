/* 
DOM = Document Object Model
Es un objeto que guarda toda la informacion de la pagina

Nos permite manipular el HTML
*/

//DOM
//Representacion virtual y reactiva de la pagina


/* 
Para acceder al dom existe la variable global "document"
El tipo de dato de document es object
Modificar el DOM es una operacion costosa en recursos

Costo de cambiar el innerHTML de la mensajeria = 1 Unidad
Debo mostrar 10 mensajes, por cada mensaje modifico el innerHTML, entonces el costo total es 10 unidades

Si primero genero toda la plantilla HTML y despues la renderizo cuanto me costara? 1 unidad
*/

//console.dir(document)

//Llama al elemento por ID
//const titulo = document.getElementById('titulo')

//innerText es una propiedad de un HTML ELEMENT que me permite acceder al texto interno de un elemento
//console.log(titulo.innerText)

/* 
let nombre = prompt('Ingresa tu nombre')
console.dir(titulo)
titulo.innerText = 'Chau ' + nombre */

/* 
Dado dos variables
 a = 20
 b = 50
Imprimir en HTML 'El resultado de {a} + {b} = {a + b}
*/

/* let mensaje = `
    El resultado de ${a} + ${b} = ${a + b}
` */


let contenedor = document.querySelector('.mensajeria')
/* contenedor.innerHTML = `
    <div class='mensaje'>
        <h3>Pepe</h3>
        <p>No sabes el asado que me comi hoy</p>
        <span>Enviado el 13/10/2025</span>
    </div>

    <div class='mensaje'>
        <h3>Pepe</h3>
        <p>No sabes el asado que me comi hoy</p>
        <span>Enviado el 13/10/2025</span>
    </div>
` */

let mensajes = [
    {
        author: 'pepe',
        content: 'Hola a todos!',
        fecha: '13/10/2025 a las 13:00',
        id: 1 
    },
    {
        author: 'maria',
        content: 'Que tal!??',
        fecha: '13/10/2025 a las 13:10',
        id: 2
    },
    {
        author: 'pepe',
        content: 'Bien, con calor!',
        fecha: '13/10/2025 a las 13:11',
        id: 3
    },
]

//Como podemos transformar los mensajes en un string con formato HTML como el que vimos mas arriba?
//Hacerlo y mostrarlo por consola

function renderizarMensajes (){
    let plantilla_mensajes_str = ''
    for(let mensaje of mensajes){
        plantilla_mensajes_str = plantilla_mensajes_str + `
        <div class='mensaje'>
            <h3>${mensaje.author}</h3>
            <p>${mensaje.content}</p>
            <span>Enviado el ${mensaje.fecha}</span>
        </div>
        `
    }

    contenedor.innerHTML = plantilla_mensajes_str
}

renderizarMensajes()



let tweets = [
    {
        id: 1,
        author: 'Pepe',
        content: 'Hoy comi un alfajor',
        attachments: [
            'https://www.farmaciassanchezantoniolli.com.ar/13210-thickbox_default/terrabusi-alfajor-triple-cl%C3%A1sico-x-70g.jpg',
            'https://atomoconviene.com/atomo-ecommerce/56032-pdt_540/alfajor-terrabusi-torta-70-grs-1-unid--.jpg'
        ],
        likes: 30,
        retweets: 3,
        thread: [
            {
                id: 2, 
                content: 'Igual prefiero el guaymallen',
                author: 'Agustin',
                likes: 40,
                retweets: 3,
                attachments: [],
                thread: []
            },
            {
                id: 3, 
                content: 'Aguante el capitan espacio!',
                author: 'Ivan',
                likes: 40,
                retweets: 3,
                attachments: [],
                thread: []
            }
        ]
    },
    {
        id: 2,
        author: 'julieta',
        content: 'Viva JS',
        attachments: [],
        likes: 30,
        retweets: 3,
        thread: []
    }
]

/* 
- Renderizar la lista de tweets
- Un tweet tiene este formato: 
    div>
        p>content
        div> lista de imagenes 
        div> 
            button> nro_likes like
            button> nro_retweets retweet
        OPCIONAL:
        div>
            div> LISTA DE Threads
                h3> Author
                p> content
                div> 
                    button> nro_likes like
                    button> nro_retweets retweet

        
- Un tweet puede tener attachments o no, por ahora todos los attachments seran imagenes.
    - Si no los tiene NO deberan renderizar nada.
    - TIP: if(tweet.attachments.length === 0) te dice si esta vacio

TAREA
- Un tweet puede tener thread o no, siempre sera un array
    - Si no los tiene NO deberan renderizar nada.
*/

/* 
renderAttachments(attachments)
    Retorne un string con los attachments
    `
    <img src='' >
    <img src='' >
    `

*/

function insertarImagenes(imagenes){
    if(!imagenes){
        return ''
    }
    let tweet_HTML = `<div>`
    for(let imagen of imagenes){
        tweet_HTML += `<img src='${imagen}'>`
    }
    tweet_HTML += `</div>`
    return tweet_HTML
}
const contenedor_tweets = document.getElementById('tweets')
function mostrarTweets(tweets){
    if(tweets.length === 0){
        return
    }
    
    let tweet_HTML = ''
    for(let tweet of tweets){
        tweet_HTML += `
        <h3>${tweet.author}</h3>
        <p>${tweet.content}</p>
        ${insertarImagenes(tweet.attachments)}
        <div>
            <button>${tweet.likes} LIKE</button>
            <button>${tweet.likes} RETWEET</button>
        </div>
        <div class='thread-container'>
            ${mostrarTweets(tweet.thread)}
        </div>
        `
    }
    return tweet_HTML
}

const tweets_HTML = mostrarTweets(tweets)
contenedor_tweets.innerHTML = tweets_HTML