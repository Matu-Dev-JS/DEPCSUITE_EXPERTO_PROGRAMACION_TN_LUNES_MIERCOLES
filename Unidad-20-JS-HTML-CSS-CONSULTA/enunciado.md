
Crear una funcion que se llame calcularIva que reciba como parametro el precio de un producto y devuelva valor del iva (21%).



## Un programa de carrito de compras
Se debe tener un carrito de compras (inicialmente vacio) en memoria
Cada producto dentro del carrito se guardara como: {id: 1, quantity: 1}
Se debe crear una funcion llamada agregarProductoAlCarrito que reciba un id_producto y una cantidad.
    - Si el producto existe debera sumar la cantidad a agregar a la cantidad existente
    - Si el producto no existe debera agregar el producto al carrito

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
    - El carrito no puede tener un item con cantidad negativa o 0



