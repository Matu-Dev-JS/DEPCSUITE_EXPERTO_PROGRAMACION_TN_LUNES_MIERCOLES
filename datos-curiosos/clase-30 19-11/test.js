const btnIncrementar = document.getElementsByClassName('btn-incrementar')
for (const btn of btnIncrementar) {
    btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.product_id)

        //Busco el producto en el carrito
        const item_carrito = carrito.find(p => p.id === id)

        //Busco la posicion original del producto en el carrito
        const index_item_carrito = carrito.indexOf(product)

        //Operador spread (Propagacion)
        //Clono mi carrito
        //Por que? Porque los estados son INMUTABLES (NO SE PUEDEN MODIFICAR SIN PASAR POR EL SETTER)
        const carrito_modificado = [...carrito]

        //Cambio el item por el item modificado en el clon del carrito
        carrito_modificado[index_item_carrito] = {
            title: item_carrito.title,
            price: item_carrito.price,
            id: item_carrito.id,
            quantity: item_carrito.quantity + 1
        }

        setCarrito(carrito_modificado)
    })
}

/* 
La regla de oro de los estados es que son INMUTABLES
Generalmente si tenes que editar un estado que es un array o objeto vas a tener que clonar el estado
*/

let form_state = {
    name: '',
    email: ''
}

function setFormState(new_form_state){
    form_state = new_form_state
    renderForm()
}

function onChangeEmail (new_email){
    //Aca clono mi estado, para editar al clon y NO al estado
    //{...form_state} es lo mismo que: {name: form_state.name, email: form_state.email} 
    const cloned_form_state = {...form_state} 
    cloned_form_state.email = new_email
    setFormState(cloned_form_state)
}



/* 
html
<div class='pepe' id='2'></div>
<div class='pepe' id='1'></div>
*/

const elemento = document.getElementsByClassName('pepe') //[ <div id='2'></div>. <div id='1'></div> ]
const primer_div = elemento[0]

/* 
Como regla general:
    Queres llamar a UN elemento:
        getElementById()
        querySelector()

    Queres llamar a muchos elementos:
        getElementsByClassName()
        querySelectorAll()
*/