//Operadores aritmeticos

// +: Concatenacion
//Una concatenacion es la union de dos cadenas (string)
//Una concatenacion ocurre si almenos uno de los 2 operando es string
//El dato no string se transforma implicitamente en string
//Siempre devuelve un string

//console.log('hola' + ' ' + 'mundo') //'hola mundo'
//console.log('hola ' + 1)
//'hola ' + String(1)
//'hola ' + '1'
//'hola 1'

//console.log('pepe ' + null)
//'pepe ' + String(null)
//'pepe ' + 'null'
//'pepe null'


// +: Suma
//Una suma ocurre cuando no hay string en los operando
//Siempre devuelve un numero
//Transformaran al dato/os no numerico en numero
//CUALQUIER OPERACION CON NAN (EXCEPTO LA CONCATENACION) DA NAN

//50 + null
//50 + Number(null)
//50 + 0
//50

//undefined + true
//Number(undefined) + Number(true)
//NaN + 1
//NaN


//console.log(undefined + null)
//console.log(String(undefined + null))

// -: Resta
//Siempre devuelve un numero
//Transformaran al dato/os no numerico en numero
//CUALQUIER OPERACION CON NAN (EXCEPTO LA CONCATENACION) DA NAN

//1 - '1'
//1 - Number('1')
//1 - 1
//0

// /: Division
//Siempre devuelve un numero
//Transformaran al dato/os no numerico en numero
//CUALQUIER OPERACION CON NAN (EXCEPTO LA CONCATENACION) DA NAN

// *: Multiplicacion
//Siempre devuelve un numero
//Transformaran al dato/os no numerico en numero
//CUALQUIER OPERACION CON NAN (EXCEPTO LA CONCATENACION) DA NAN


//1) 6 + NaN * 0 //NaN

//2) 11 / '1' //11

//3) String(Boolean(Number(NaN))) - 3
//3) String(Boolean(NaN)) - 3
//3) String(false) - 3
//3) 'false' - 3
//3) Number('false') - 3
//3) NaN - 3
//3) NaN

//4) 40 + 'hola'
//4) String(40) + 'hola'
//4) '40' + 'hola'
//4) '40hola'

//5) 0 - null
//5) 0


//Comparadores
//Sirven para comparar datos
//Siempre retornan un boolean

// ==: es igual a
//8 == 8 //true
//70 == '70' //true
//1 == true //true
//2 == true //false
//NaN == NaN //False. EXCEPCION NAN ES EL UNICO DATO INCOMPARABLE, NO ES IGUAL A NADIE, si queremos comparar a NAN debemos usar isNaN
//0 == null //false Excepcion de null, null solo es comparable con null o undefined


// !=: no es igual a
//6 != (true + 5) //false
//6 != '6' //false

// ===: es estrictamente igual a (Buena practica)
//70 === '70' //false
//1 === Number(String(1)) //true

// !==: es estrictamente distinto de

//Usar con numeros
// >: Mayor que

// <: Menor que
// >=: Mayor o igual que
// <=: Menor o igual que


//Operdadores Logicos

// ! NOT:
//Devuelve el valor booleano opuesto
!true //false
!80 //false
!null //true

// || OR: evalua el primer valor, si es verdadero devolvera el primero si es falso devolvera el segundo. Es un selector
70 || null
NaN || 0 || null


// && AND: Evualua el primer valor, si es verdadero devolvera el segundo y si no devolvera el primero
800 && null

//Tablas de la verdad OR
//Conclusion: Si almenos uno de los datos es verdadero devolve un dato verdadero. Sino devuelve un falso

true || true    //true
false || true   //true
true || false   //true
false || false  //false


//Tablas de la verdad AND
//Conclusion: Ambos tienen que ser verdaderos para que AND devuelva un verdadero

true && true    //true
false && true   //false
true && false   //false
false && false  //false

//Un uso muy comun de los operadores logicos es en condiciones
//Si tu edad es entre 30 y 60
//edad = 45
//edad >= 30 && edad <= 60

//Si sos pepe o tenes mas de 50, te dejo pasar
//edad = 60
//nombre = 'pedrito'

//nombre === "pepe" || edad >=50
//edad >= 50 ||  nombre === "pepe"

//let nombre = 'pepesito'
//let edad = 50

//nombre === 'pepe' || buscarEdadEnDB() >= 50
//buscarEdadEnDB() >= 50 || nombre === 'pepe' 

// ?? Nullish coalescing: Evalua si el primer valor es null o undefined y devuelve el segundo, sino se queda con el primero
//es_dia = buscarEnMemoria() ?? mirarPorVentana() ✅
//es_dia = buscarEnMemoria() || mirarPorVentana() ⚠

//Variables

//Guardar un valor en memoria
//Ejemplo, le pido el nombre al usuario y lo dejo guardado en memoria

//var JS moderno No la usamos

//declaro a valor especial
//inicializo/asigno valor en 90
//var valor_especial = 90

//console.log(valor_especial)

//let ES6 (EcmaScript 6)
//Si una variable let no tiene un valor incial el valor sea undefined


//Se recomienda usar nombres referenciales
/* let edad = 80
let nombre = 'pepe'

//Reasignacion de let
edad = 90

console.log(edad)

//snake_case
let usuario_edad
//camelCase
let usuarioNombre

console.log(usuarioNombre) */


//const ES6
//Se usa cuando cierto dato se mantiene de incio a fin del programa
//Deben tener un valor inicial
//No pueden redeclarar
//No se pueden reasingar

const PI = 3.14
const IVA_PORCENTAJE = 21
const CLAVE_SECRETA = 'clave_123'
const constante_minuscula = 605

//Bloques de codigo
//CONDICIONALES


//Prompt nos permite solicitar un dato al usuario
//alert nos permite mostrar x mensaje por ventanita (pop up)

let nombre = prompt('dame tu nombre')
//alert(nombre)
//document.write(nombre)

if(nombre === 'pepe'){
    alert('Hola jefe!')
}
else if(nombre === 'maria'){
    alert('Hola jefa!')
}
else{
    alert('Patada ninja!')
}

//ELSE IF HELL