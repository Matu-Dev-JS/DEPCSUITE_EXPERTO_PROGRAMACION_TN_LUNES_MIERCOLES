let nombre_1 = 'pepe'
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

console.log(personas_que_me_caen_mal.length)




//Los arrays nos permiten enlistar datos de forma ordenada
//Los arrays pueden contener cualquier tipo de dato
//Los arrays guardan internamente su longitud a la cual podemos acceder como la propiedad .length
//A los arrays se los suele llamar tambien como: Listas, Arreglos, Matrices, Colecciones
//Para acceder a un elemento del array debemos conocer su Indice

let usuarios = []

//Metodos
//Para manipular un array existen metodos asociados al prototipo de los arrays
//.push() Nos permite agregar un elemento al final de la lista

let nuevo_usuario = {
    id: 1,
    nombre: 'pepe',
    edad: 40
}

usuarios.push(nuevo_usuario)

console.log(usuarios)



//Hacer un carrito
//Crear una lista llamada carrito (Empezara vacia)
//Pedir al usuario 3 veces:
//  -Precio (no hace falta validar)
//  -Nombre (no hace falta validar)
//  Crear un objeto con estas 2 propiedades y agregarlo a la lista carrito