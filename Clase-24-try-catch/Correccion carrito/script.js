const cart = [
    /* {
        id: 1,
        title: "mouse gamer",
        price: 4000,
        quantity: 2
    },
    {
        id: 2,
        title: "PC Dell",
        price: 40000,
        quantity: 6
    },
    {
        id: 3,
        title: "Monitor 24\"",
        price: 6000,
        quantity: 6
    }, */
]

const cart_conteiner = document.getElementById('cart-conteiner')
const button_eliminar_carrito = document.getElementById('button-eliminar-carrito')
const precio_total = document.getElementById('Total')

function findProductById(product_id) {
    for (const product of cart) {
        if (product.id === product_id) {
            return product
        }
    }
    return null
}
function renderizarCarrito() {
    let plantilla_html = ''
    for (const product of cart) {
        plantilla_html = plantilla_html + `
            <div>
                <h3>${product.title}</h3>
                    <p>Precio unitario:${product.price}</p>
                    <p>Precio:${product.price * product.quantity}</p>
                <button class="btn-decrementar" data-product_id="${product.id}">-</button>
                <p class="contador-productos">${product.quantity}</p>
                <button class="btn-incrementar" data-product_id="${product.id}">+</button>
                <button class="btn-eliminar" data-product_id="${product.id}">Eliminar</button>
            </div>
        `
    }
    cart_conteiner.innerHTML = plantilla_html

    const btn_incrementar = cart_conteiner.getElementsByClassName('btn-incrementar')

    for (const btnI of btn_incrementar) {
        btnI.addEventListener(
            "click",
            incrementProductQuantity
        )
    }
    const btn_decrementar = cart_conteiner.getElementsByClassName('btn-decrementar')
    for (const btnD of btn_decrementar) {
        btnD.addEventListener(
            "click",
            decrementProductQuantity
        )
    }
    const btn_eliminar = cart_conteiner.getElementsByClassName('btn-eliminar')
    for (const btnE of btn_eliminar) {
        btnE.addEventListener(
            "click",
            handleDeleteProduct
        )
    }
    calcularTotal()
}



function incrementProductQuantity(event) {
    const product_id = Number(event.target.dataset.product_id)
    const product = findProductById(product_id)
    product.quantity = product.quantity + 1
    renderizarCarrito()
}

function decrementProductQuantity(event) {
    try {
        if (determinarExito(90)) {
            const product_id = Number(event.target.dataset.product_id)
            const product = findProductById(product_id)
            if (product.quantity <= 1) {
                deleteProductById(product_id)

            } else {
                product.quantity = product.quantity - 1
            }
            renderizarCarrito()
        }
        else {
            throw new Error('No se pudo decrementar el producto') //{message:}
        }
    }
    catch (error) {
        console.log(error.message)
    }
}

function handleDeleteProduct(event) {
    const product_id = Number(event.target.dataset.product_id)
    deleteProductById(product_id)
}

function deleteProductById(product_id) {
    const product = findProductById(product_id)
    const product_index = cart.indexOf(product)
    if (product_index > -1) {
        cart.splice(product_index, 1)
    }
    renderizarCarrito()
}

function eliminarCarrito() {
    if (cart.length === 0) {
        return alert("Carrito vacio")
    }
    cart.length = 0
    renderizarCarrito()
}

function calcularTotal() {
    let total = 0
    for (const product of cart) {
        const productoSubtotal = product.price * product.quantity
        total = total + productoSubtotal
    }

    precio_total.innerText = total
}


button_eliminar_carrito.addEventListener("click", eliminarCarrito)

//renderizarCarrito()

/* 

- incrementar tasa-fallo: 10%
- decrementar tasa-fallo: 30%
- eliminar    tasa-fallo: 80%

Cuando incrementar falle deberas mostrar el modal de fallo: 
    Titulo: Fallo del servidor
    texto:  no has podido agregar el producto al carrito

Cuando decrementar falle deberas mostrar el modal de fallo: 
    Titulo: Fallo del servidor
    texto:  no has podido quitar el producto del carrito

Cuando eliminar falle deberas mostrar el modal de fallo: 
    Titulo: Fallo del servidor
    texto:  no has podido eliminar el producto del carrito

*/


function loadCart() {
    const serverCartLoaded = [
        {
            id: 1,
            title: "mouse gamer",
            price: 4000,
            quantity: 2
        },
        {
            id: 2,
            title: "PC Dell",
            price: 40000,
            quantity: 6
        },
        {
            id: 3,
            title: "Monitor 24\"",
            price: 6000,
            quantity: 6
        },
    ]


    //Se ejecutara el for of en 2 segundos
    setTimeout(
        function (){ //Accion a ejecutar
            for (const item of serverCartLoaded) {
                cart.push(item)
            }
            renderizarCarrito()
        },
        2000 //Tiempo en MS
    )

    
}

loadCart()

/* 
Emulando una consulta al servidor
- El carrito tardara 2 segundos en cargarse, al finalizar la carga, renderizar el carrito
- Si se esta cargando debera mostrar un cargando en la pantalla
- OPCIONAL: Habra una tasa de exito del 70%, si falla la carga de carrito, lanzar en la PANTALLA donde mostramos el carrito, 'no se pudo cargar el carrito' con un boton de reintentar 
- Opcional: El boton de reintentar debera volver a intentar obtener la lista de el server (con los 2 segundos y la pantalla de carga) (OJO QUE PUEDE VOLVER A FALLAR.)

RECOMENDACION PERSONAL:
- Tengan un estado global de cargando, donde si cargando es verdadero, se muestre la pantalla de carga
- Alternativa, tengan una funcion llamada renderLoader que renderize el cargando y unmountLoader elimine el loader
*/