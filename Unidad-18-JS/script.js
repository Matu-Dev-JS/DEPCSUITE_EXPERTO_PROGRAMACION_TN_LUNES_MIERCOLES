
/* 
FUNCIONES:

Es un bloque de codigo guardado en memoria encargado de resolver un problema especifico
*/

//saludar
//Mostrar un hola por alerta


//Declaracion de una funcion
/* function saludar(){
    alert('hola pepe')
}
 */
//Invocacion, llamar, ejecutar
/* saludar()
 */

/* 
JS es un lenguaje debilmente tipado
JS es un lenguaje de tipado dinamico
*/
/* 
La funcion saludar espera recibir un nombre
El nombre deberia ser de tipo string
*/

//el return de una funcion es el valor que nos dara la funcion al resolverse


//Segun los principios SOLID, una funcion debe tener solo UNA responsabilidad en lo posible
//Cual es la responsabilidad de la funcion saludar?
//- Determinar el saludo
/* function saludar( nombre ){
    let saludo = 'hola ' + nombre
    return saludo
}

function saludarPorAlerta(nombre){
    alert( saludar(nombre) )
}

console.log( saludar('pepe') )
alert( saludar('maria') )
document.write( saludar('pepesito') ) */
//Que pasa si quiero saludar por consola?
//Que pasa si quiero saludar por HTML?


//Hacer la funcion calcularIva
//Debe recibir 1 precio 
//Retornar el 21% del precio




/* 
9) Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
10) Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
11) Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null 
12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

25)Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas
30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:

esVocal('a')
true
 esVocal('n')
false
 esVocal('e')
true

27)Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:
Ingresá una cantidad de grados Celsius
Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}


*/


//f(x) = 2.x + 1
//f(x = 3) = 2 . 3 + 1 = 7
//f(x = 4) = 2 . 3 + 1 = 9


//Prompt CONTRATOS:
//- Mensaje: string (si no lo es lo transforma a string)
//- Mostrar un pop up con un input en pantalla donde el usuario podra escribir
//- Si el usuario da al boton de cancelar se compromete a retornar null
//- Si el usuario da al boton de aceptar se compromete a retornar el dato escrito por el usuario como un string
//prompt()

/* function esVocal(letra) {
    const a = "a";
    const e = "e";
    const i = "i";
    const o = "o";
    const u = "u";
    if (letra !== a || letra !== e || letra !== i || letra !== o || letra !== u) {
        console.log("No es vocal");
    }
} */


/* 
Una funcion llamada solicitarTexto(mensaje_solicitud, mensaje_error)
La funcion solicitara un texto al usuario usando el mensaje solicitud por prompt
Validar que el texto sea un texto (Que no sea numero, comillas vacias o null)
Si el texto es invalido mostrar alerta de error y volver a solicitar
Si el texto es valido retornarlo
*/

//let nombre = solicitarTexto('Ingresa tu nombre', 'El nombre es invalido')


/* 
Una funcion llamada solicitarNumero(mensaje_solicitud, mensaje_error)
La funcion solicitara un numero al usuario usando el mensaje solicitud por prompt
Validar que el texto sea un numero (Que no sea un texto, comillas vacias o null)
Si el numero es invalido mostrar alerta de error y volver a solicitar
Si el numero es valido retornarlo
*/

function solicitarDato (mensaje_solicitud, mensaje_error, validacionCallback){
    let dato = prompt(mensaje_solicitud)
    while( !validacionCallback(dato) ){
        alert(mensaje_error)
        dato = prompt(mensaje_solicitud)
    }
    return dato
}


//Quiero solicitar un numero
function validarNumero (numero){
    console.log('me ejecuto')
    return numero && !isNaN(numero)
}

function validarNumeroPositivo (numero){

    return numero && !isNaN(numero) && Number(numero) > 0
}


let numero = solicitarDato( 'Ingresa un numero', 'Error al ingresar numero', validarNumero )

let numero_positivo = solicitarDato( 'Ingresa un numero', 'Error al ingresar numero', validarNumeroPositivo )