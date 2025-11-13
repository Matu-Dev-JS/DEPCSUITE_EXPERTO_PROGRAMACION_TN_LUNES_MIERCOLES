let users_state = null
let loading_users_state = false
let error_users_state = null


const users_container = document.getElementById('users-container')
const spinner = document.getElementById('spinner')
const error_HTML = document.getElementById('error')

function renderUsers() {
    if(!users_state){
        return null
    }

    let html = ''
    for(let user of users_state ){
        html = html + `
            <div class="user">
                <h2>${user.firstName}</h2>
                <p>${user.email}</p>
            </div>
        `
    }

    users_container.innerHTML = html
}

function renderLoadingSpinner(){
    if(loading_users_state){
        spinner.classList.remove('hidden')
    }else{
        spinner.classList.add('hidden')
    }
}

function renderError(){
    if(!error_users_state){
        return null;
    }
    else{
        error_HTML.innerText = error_users_state
    }
}

function setUsersState (new_value){
    users_state = new_value
    renderUsers()
}

function setLoading(new_loading_state){
    cargandoProductos = new_loading_state
    renderLoadingSpinner()
}


function setError(new_error_state){
    error_users_state = new_error_state
    renderError()
}



renderUsers()
renderLoadingSpinner()
renderError()


/* Mostrar por consola el resultado del servidor */
/* function loadUsers(){
    //Enviar un fetch a el servidor
    fetch('https://dummyjson.com/users')
} */

async function loadUsers(){
    setLoading(true)
    let response_http = await fetch(
        'https://dummyjson.com/users', 
        {
            method: 'GET'
        }
    )
    
    let response = await response_http.json()
    setLoading(false)

    console.log(response)
    setUsersState(response.users)
}

loadUsers()


/* 
Crear un boton de eliminar sobre cada usuario, al darle eliminar se debera usar la funcion deleteUserByUserId(user_id) y eliminara el elemento del estado de usuarios
*/