let users_state = null
let loading_users_state = false
let error_users_state = null


const users_container = document.getElementById('users-container')
const spinner = document.getElementById('spinner')
const error_HTML = document.getElementById('error')

function renderUsers() {
    if(!users){
        return null
    }

    let html = ''
    for(let user of users_state ){
        html = html + `
            <div class="user">
                <h2>${user.name}</h2>
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
    renderLoadingPost()
}


function setError(new_error_state){
    error_users_state = new_error_state
    renderError()
}



renderUsers()
renderLoadingSpinner()
renderError()


/* Mostrar por consola el resultado del servidor */
function loadUsers(){
    //Enviar un fetch a el servidor
    fetch('https://dummyjson.com/users')
}