/* 
let persona = {
    nombre: 'pepe',
    edad: 20,
    especie: 'humano'
} 
*/


//persona.x
//ESTO ES UNA ABREVIACION DE
//persona['x']


//let propiedad_solicitada = prompt('Ingrese la propiedad acceder: nombre, edad, especie') //'nombre'

//FORMA INCORRECTA
//SI accedo a la propiedad de un objeto que no existe ME DEVOLVERA UN UNDEFINED
//alert('La propiedad ' + propiedad_solicitada + ' vale ' + persona.propiedad_solicitada)


//FORMA CORRECTA
//alert('La propiedad ' + propiedad_solicitada + ' vale ' + persona[propiedad_solicitada])


//Notacion de corchetes
//alert('Hola mi nombre es ' + persona['nombre'])

//Notacion de puntos
//alert('Hola mi nombre es ' + persona.nombre)





/* ## Un programa de carrito de compras
Se debe tener un carrito de compras (inicialmente vacio) en memoria
Cada producto dentro del carrito se guardara como: {id: 1, quantity: 1}
Se debe crear una funcion llamada agregarProductoAlCarrito que reciba un id_producto y una cantidad.
    - Si el producto existe debera sumar la cantidad a agregar a la cantidad existente
    - Si el producto no existe debera agregar el producto al carrito
REGLAS:
    - El carrito no puede tener 2 veces el mismo producto (osea con el mismo ID)
    - El carrito debe tener a cada producto con el formato {id: number, quantity: number} 
*/

let shopping_cart = []

function agregarProductoAlCarrito(id_product, quantity_product) {


    for (let product of shopping_cart) {
        if (id_product === product.id) {
            product.quantity = product.quantity + Number(quantity_product)
            return product
        }
    }
    //Si termina el FOR significa que no existe el producto en el carrito
    //Creamos el nuevo registro
    let product = {
        id: Number(id_product),
        quantity: Number(quantity_product),
    }
    //LO agrego al carrito
    shopping_cart.push(product)
    return product
}


agregarProductoAlCarrito(3, 10)


/* 
eliminarProductoPorId(id_producto, cantidad)
- Si el producto no esta debe retornara null
- Si esta:
    -Si la cantidad a eliminar es mayor a la cantidad en carrito debera retornar null
    -SINO:
        -Si la cantidad es exactamente la cantidad en el carrito debera eliminar el item del carrito
        -SINO:
            - Decrementar la cantidad del item por la cantidad a restar

REGLAS:
- El carrito no puede tener 2 veces el mismo producto (osea con el mismo ID)
- El carrito debe tener a cada producto con el formato {id: number, quantity: number}
- El carrito no puede tener un item con cantidad negativa o 0
*/
function findProduct( id_product ){
    for (let product of shopping_cart){
        if(id_product === product.id){
            return product
        }
    }
    return null
}


function eliminarProductoPorId(id_product, quantity_product) {
    const product_found = findProduct(id_product)
    if(!product_found || product_found.quantity < quantity_product){
        return null
    }

    if(product_found.quantity === quantity_product){    
        let indice_a_eliminar = shopping_cart.indexOf(product_found)
        shopping_cart.splice(indice_a_eliminar, 1)
        return 
    }

    let new_quantity = product_found.quantity - quantity_product

    if(new_quantity <= 0){
        return null
    }
    //Busco posicion
    //Llamo al objeto por posicion en el array de carrito
    //Modifico cantidad
    product_found.quantity = new_quantity

}

console.log(eliminarProductoPorId(8, 11))
eliminarProductoPorId(3, 10)
/* eliminarProductoPorId(3, 3)
eliminarProductoPorId(4, 6) */

console.log(shopping_cart)