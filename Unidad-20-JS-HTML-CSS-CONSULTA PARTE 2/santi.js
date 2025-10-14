function agregarProductoAlCarrito(id_producto, cantidad) {
    for (let item of carrito) {
        if (id_producto === item.id) {
            item.cantidad = item.cantidad + Number(cantidad)
            return item
        }
    }
    let nuevo_item = {
        id: id_producto,
        cantidad: cantidad
    }
    carrito.push(nuevo_item)
}

function eliminarProductoDelCarrito(id_producto, cantidad) {
    for (let item of carrito) {
        if (id_producto === item.id) {
            if (cantidad > item.cantidad) {
                return null
            } 
            else if (cantidad === item.cantidad) {
                let posicion_a_eliminar = carrito.indexOf(item)
                carrito.splice(posicion_a_eliminar, 1)
                return 
            } 
            else {
                item.cantidad = item.cantidad - cantidad
            }
        }
    }
    return null
}


//TODO: crear buscarProductoPorIdEnCarrito

let carrito = []
agregarProductoAlCarrito(1, 16)
agregarProductoAlCarrito(2, 6)
agregarProductoAlCarrito(1, 8)
eliminarProductoDelCarrito(1,9)

console.log(carrito)


/* 
SPLICE
    Recibe 3 parametros
        - Índice donde se quiere empezar a modificar el array
        - Cuantos elementos querés eliminar a partir del índice indicado (Si es 0 no elimino nada)
        - Elementos a agregar a partir del índice
*/