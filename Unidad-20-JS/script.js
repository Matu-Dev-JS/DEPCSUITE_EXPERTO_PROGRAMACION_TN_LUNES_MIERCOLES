/* let nombre_1 = 'pepe'
let nombre_2 = 'juan'
let nombre_3 = 'maria'

//Array de strings
let nombres = [
    'pepe', //Indice: 0
    'juan', //Indice: 1
    'maria' //Indice: 2
]

let operaciones_disponibles = [
    '+', //Indice: 0
    '-', //Indice: 1
    '*', 
    '/'  //Indice: 3
]

let indice_multiplicacion = 2
console.log('El simbolo de multiplicacion es: ' + operaciones_disponibles[indice_multiplicacion])

//Los arrays pueden contener cualquier tipo de dato
//Array numerico
let notas_trimestre = [9, 6, 8]

let array_raro = [90, 'pepe']

let personas_que_me_caen_mal = [
    {
        nombre: 'pepesito',
        edad: 43
    },
    {
        nombre: 'maria',
        edad: 32
    }
]

let maria = personas_que_me_caen_mal[1]

console.log(maria.edad)

console.log(personas_que_me_caen_mal.length) */




//Los arrays nos permiten enlistar datos de forma ordenada
//Los arrays pueden contener cualquier tipo de dato
//Los arrays guardan internamente su longitud a la cual podemos acceder como la propiedad .length
//A los arrays se los suele llamar tambien como: Listas, Arreglos, Matrices, Colecciones
//Para acceder a un elemento del array debemos conocer su Indice

//let usuarios = []

//Metodos
//Los metodos pueden ser MUTABLES, osea que modifican el array en memoria o NO MUTABLES, osea que NO modifican el array en memoria
//Para manipular un array existen metodos asociados al prototipo de los arrays
//.push() Nos permite agregar un elemento al final de la lista (Mutables) (ESTE ES EL METODO MAS POPULAR)
//.pop() Nos permite eliminar el ultimo elemento de la lista (Mutables)
//.shift() Nos permite eliminar el primer elemento de la lista (Mutables)
//.unshift() Nos permite agregar un elemento al inicio de la lista (Mutables)


//.splice() Nos permite recortar y agregar elementos al array
//1er) parametro es la posicion desde donde queremos recortar
//2do) parametro es cuantos elementos quiero recortar desde esa posicion
//3er) parametro es que elemento quiero agregar a esa posicion

//indexOf() Nos permite buscar el INDICE de x elemento (NO MUTABLE)
//includes() Nos permite saber si cierto string esta dentro de la lista de strings (GENERALMENTE se usa con un array de strings)

//let nombres = [ 'pepe', 'juan', 'maria']

//eliminar a juan
//let indice_de_juan = nombres.indexOf('juan')
//nombres.splice(indice_de_juan, 1)
//console.log(nombres)

//Hacer un carrito
//Crear una lista llamada carrito (Empezara vacia)
//Pedir al usuario 3 veces:
//  -Precio (no hace falta validar)
//  -Nombre (no hace falta validar)
//  Crear un objeto con estas 2 propiedades y agregarlo a la lista carrito


let carrito = [];


/* for(
    let i = 1; 
    i <= 3; 
    i = i + 1
){
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = prompt("Ingrese el precio del producto:");
    let producto = {
        precio: Number(precio),
        nombre
    }
    carrito.push({ producto });
} */
/* 
let usuarios = [
    {
        nombre: 'pepe',
        edad: 60,
        id: 1
    },
    {
        nombre: 'maria',
        edad: 30,
        id: 2
    },
    {
        nombre: 'pedro',
        edad: 53,
        id: 3
    },
    {
        nombre: 'julieta',
        edad: 83,
        id: 4
    },
    {
        nombre: 'amanda',
        edad: 24,
        id: 5
    },
    {
        nombre: 'manuel',
        edad: 21,
        id: 6
    },

]
 */
//Quiero eliminar al usuario con nombre 'pedro' de mi lista de usuarios
/* 
for (let index = 0; index < usuarios.length; index = index + 1) {
    let usuario = usuarios[index]

    if (usuario.nombre === 'pedro') {
        let posicion_pedro = usuarios.indexOf(usuario)
        usuarios.splice(posicion_pedro, 1)
    }
}

console.log(usuarios)


let productos = [
    {
        nombre: 'TV samsung 32 pulgadas',
        precio: 3000,
        id: 1
    },
    {
        nombre: 'TV samsung 40 pulgadas',
        precio: 4000,
        id: 2
    },
    {
        nombre: 'TV samsung 50 pulgadas',
        precio: 5000,
        id: 3
    },
    {
        nombre: 'TV samsung 60 pulgadas',
        precio: 6000,
        id: 4
    },
    {
        nombre: 'TV samsung 70 pulgadas',
        precio: 7000,
        id: 5
    }
]
 */
/* 
Crear una funcion que dado el id de un producto, pueda eliminar ese producto de la lista de productos
En caso de eliminar devolver un true
En caso de no eliminar devolver un null
*/



//declaracion
/* function eliminarProductoPorId(id) {
    for (let i = 0; i <= productos.length; i++) {
        let producto = productos[i]
        if (id === producto.id) {
            let posicion_producto = productos.indexOf(producto)
            productos.splice(posicion_producto, 1)
            return true
        }
    }
    return null
} */

//Invocacion
/* eliminarProductoPorId(2) */


/* let url = [
    'http://',
    'musimundo.com',
    '/page/1'
]

let is_http_url = url.includes('http://')

console.log(is_http_url) */


let mensaje = 'recorcholis, hoy lunes no podre jugar, mañana tengo examen'

let palabras_prohibidas = [
    'lunes',
    'trabajar',
    'recorcholis'
]

let tiene_palabra_prohibida = false

for(
    let i = 0; 
    i < palabras_prohibidas.length; 
    i = i + 1
){
    let palabra_prohibida = palabras_prohibidas[i]
    if(mensaje.includes(palabra_prohibida)){
        tiene_palabra_prohibida = true
    }
}

if(tiene_palabra_prohibida){
    console.log("No puedes escribir ese mensaje")
}
else{
    console.log('Mensaje subido exitosamente')
}

/* 
Hacer una funcion que se llame verificarMensaje(mensaje) y retorne un objeto con 2 propiedades
{
    resultado: true | false Dependiendo de si el mensaje contiene o no terminos prohebidos
    palabras_encontradas: [] Que contendra la lista de plabras prohibidas que esten en el mensaje 
}

Hacer una funcion que se llame agregarPalabraProhibida(nueva_palabra) y agregue dicha palabra a la lista de palabras prohibidas. 
Si la palabra ya esta agregada retornar un false
Sino retornar un true

Hacer una funcion que se llame eliminarPalabraProhibida(palabra_a_eliminar) y elimine dicha palabra
Si la palabra NO esta agregada retornar un false
Sino retornar un true

 */