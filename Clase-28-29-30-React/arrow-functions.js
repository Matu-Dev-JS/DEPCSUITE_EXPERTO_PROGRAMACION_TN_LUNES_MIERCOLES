const nombres = ['pepe', 'juan', 'maria']

//arrow function
/* const mostrarNombre = (nombre) => {
    console.log(nombre)
} */

//Una funcion en flecha que solo ejecuta una linea de codigo puede abreviarse

/* const mostrarNombre = (nombre) => console.log(nombre) 
nombres.forEach(
    mostrarNombre
) */

//Arrow function anonima
/* nombres.forEach(
    (nombre) => {
        console.log(nombre)
    } 
) */

//Arrow function anonima abreviada
/* nombres.forEach(
    (nombre) => console.log(nombre)
) */

//La arrow function abreviada tiene una caracteristica especial, el retorno directo
//SI la funcion en flecha no tiene llaves, la flecha es el retorno
/*
function sumar(a, b){
    return a + b
}
const restar = (a, b) => a - b 
*/