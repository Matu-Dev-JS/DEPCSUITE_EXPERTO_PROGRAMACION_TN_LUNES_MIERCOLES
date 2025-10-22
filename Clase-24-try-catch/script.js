



//Logica del modal
const modalContainer = document.querySelector('.modal-container')
const btnCloseModal = document.querySelector('.btn-close')
const modal = document.querySelector('.modal-content')


function renderModal(title, text){
    modal.innerHTML =`
    <h3>${title}</h3>
    <p>${text}</p>
    `
    handleOpenModal()
}

function handleOpenModal() {
    //Eliminar la clase close de modalContainer
    modalContainer.classList.remove('close')
}

function handleCloseModal() {
    //agrega la clase close de modalContainer
    modalContainer.classList.add('close')
}

btnCloseModal.addEventListener(
    'click',
    handleCloseModal
)

/* 
    try intenta ejecutar un bloque de codigo
    Si hay un error entonces el bloque try frena y empieza a ejecutarse el bloque catch
*/


/* try{
    let a = 15

    let suma = a + b

    console.log('La suma es: ' + suma)

    //Si hay un error diga por consola "Error interno al hacer la suma"
}
catch (error){
    console.log('Hubo un fallo al ejecutar la suma')
    renderModal('Error en la suma', 'La suma ha fallado, vuelve a intentar...')
}


console.log('Operacion critica')
 */


/**
 * porcentaje es un numero del 1 al 100 que determina la tasa de exito
 * 
 * */
function determinarExito (porcentaje) {
    const factor_porcentaje = porcentaje / 100
    const numero_random = Math.random() //Es un numero del 1 al 0
    return factor_porcentaje > numero_random
}

const user_data = {
    nombre: 'pepe',
    id: 1,
    dinero: 500
}

function loadUserData (){
    if(determinarExito(50)){
        return user_data
    }
    else{
        return null
    }
}

try{
    const user = loadUserData()
    if(!user){  
        //Lanza un error al catch mas cercano
        //Corta la ejecucion del codigo
        throw new Error('No se pudo cargar los datos del usuario, intente mas tarde') //{message: }
    }

    console.log('Usuario cargado con exito')
}
catch(error){
    console.log(error)
    renderModal(
        'Hubo un error al cargar el usuario',
        error.message
    )
}