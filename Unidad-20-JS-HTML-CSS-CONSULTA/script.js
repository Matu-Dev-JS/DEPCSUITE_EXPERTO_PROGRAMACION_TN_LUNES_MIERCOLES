//Funcion: Un bloque de codigo guardado en memoria

/* {   
    //Trabajo la logica de definir quien soy
    let numero_random = Math.random() //Te retorna un valor entre 0 y 1
    if(numero_random > 0.5){
        console.log('Hola a todos, me llamo Matias!')
    }
    else{
        console.log('Hola a todos, me llamo Pepe!')
    }
} */

//Definir mi funcion con el nombre definirQuienSoy
//definirQuienSoy recibira un numero del 1 al 100 que representara el valor del porcentaje de acierto de mati
//Una funcion debe tener una responsabilidad (Single responsability)


//Cual es la responsabilidad de definirQuienSoy? ACTUAL
//✅ cual DEBERIA SER la responsabilidad de definirQuienSoy

function definirQuienSoy ( nro_porcentaje){

    let porcentaje = nro_porcentaje / 100

    //Trabajo la logica de definir quien soy
    let numero_random = Math.random() //Te retorna un valor entre 0 y 1
    if(numero_random > porcentaje){
        return 'Pepe'
    }
    else{
        return 'Matias'
    }
}



let carrito = [];

function buscarProducto(id_producto) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === id_producto) {
            return carrito[i];
        }
    }
    return null;
}
function sumarCantidad(id_producto, quantity) {
    let producto = buscarProducto(id_producto);
    if (producto) {
        producto.quantity += quantity;
    }
}


function agregarProductoAlCarrito(id_producto, quantity) {
    let productoExistente = buscarProducto(id_producto);
    if (productoExistente) {
        // Si el producto ya existe, sumamos la cantidad
        sumarCantidad(id_producto, quantity);
    } else {
        // Si el producto no existe, lo agregamos al carrito
        carrito.push({ id: id_producto, quantity: quantity });
    }
}


// Pruebas
agregarProductoAlCarrito(1, 2); // agrega {id: 1, quantity: 2}
agregarProductoAlCarrito(2, 3); // agrega {id: 2, quantity: 3}
agregarProductoAlCarrito(1, 4); // suma 4 a {id: 1, quantity: 2}, total {id: 1, quantity: 6}
agregarProductoAlCarrito(3, 1); // agrega {id: 3, quantity: 1}
console.log(carrito); //  Mostraria lo siguiente = [{id: 1, quantity: 6}, {id: 2, quantity: 3}, {id: 3, quantity: 1}]