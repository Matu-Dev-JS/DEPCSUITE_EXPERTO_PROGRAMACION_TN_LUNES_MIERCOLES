/* Asincronia */


let posts_loading = false

//Usamos async cuando queremos que la funcion maneje codigo asincronico
//por ejemplo fetch es codigo asincronico, entonces la funcion que llame a fetch debe ser asincronica
async function consultaAlServidor (){
    posts_loading = true
    renderLoading()
    //Hace consultas HTTP
    //Response_http es un objeto con datos de la Response
    let response_http = await fetch(
        //URL a consultar
        'https://jsonplaceholder.typicode.com/posts',

        //Objeto de consulta
        {
            method: "GET", //Obtener la lista de posteos
        }
    )
    //Leemos y extraemos el JSON de la respuesta del servidor
    let response = await response_http.json()
    console.log(response)
}

/* 
Por cada posteo renderizar 
<div>
    <h2>${post.title}</h2>
    <p>${post.body}</p>
</div>

Vamos a tener una variable que guardara el estado de carga, es decir si esta cargando o no
Si la variable es verdadera se debera renderizar por pantalla un 'cargando'
Sino se debera renderizar la lista de posteos

function renderLoading () {
    if(loading){
        loading_HTML.classlist.remove('hidden')
        loading_HTML.styles.display = 'none'
        loading_HTML.innerText = ''
        loading_HTML.innerHTML = ''
    }
    else{
        loading_HTML....    
    }
}
*/




consultaAlServidor()

console.log('pepe')


/* 
fetch retorna una promise
Promise:
Una promesa es el objeto que usa JS para manejar asincronia
Es un objeto con un estado interno que marca el momento de la promesa:
    - Pending: La promesa aun no fue resuelta
    - Resolved: La promesa fue resuelta
    - Reject: La promesa NO fue resuelta osea se resolvio con problemas

Si utilizo await la promesa retornara el resolved apenas sea resuelta
*/

//Estados: Almacenar informacion reactiva (Que al modificarlos nos obligaran a re-renderizar)
let post_loading = false
let posts_response = []

const loading_div = document.querySelector(".Loading")
const container_post = document.querySelector('.container-post')

//Renderizar
function renderPost(){
    let plantilla_post = ''
    for (let post of posts_response) {
        plantilla_post += `
        <div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
    }
    container_post.innerHTML = plantilla_post
}

function renderLoadingPost() {
    if(post_loading){
        loading_div.classList.remove('hidden')
    }else{
        loading_div.classList.add('hidden')
    }
}


//Setters: Se encargan de cambiar de valor el estado y rerenderizar
function setLoading (new_loading_state){
    post_loading = new_loading_state
    renderLoadingPost()
}

function setPosts (posts){
    posts_response = posts
    renderPost()
}


//Consulta al server
async function consultaAlServidor() {
    setLoading(true)

    let response_http = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: "GET", 
        }
    )
    let response = await response_http.json()

    setLoading(false)
    setPosts(response)
}

consultaAlServidor()