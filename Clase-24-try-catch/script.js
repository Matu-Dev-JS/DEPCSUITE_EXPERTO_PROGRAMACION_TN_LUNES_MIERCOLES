



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


try{
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
