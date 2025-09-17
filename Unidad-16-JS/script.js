
//1)
//Ingresar una operacion ('+', '-', '*', '/) (prompt)
//Verificar si la operacion ingresada es valida
//Si es valida vamos a mostrar por alerta 'Operacion valida'
//Si no mostrar 'Operacion invalida'
/* let operacion = prompt('Ingrese una operacion');
if (
    operacion === '+'
    || operacion === '-'
    || operacion === '*'
    || operacion === '/'
) {
    alert('Operacion valida');
}
else {
    alert('Operacion invalida');
}
 */
//2)
/* 
Solicitar un numero
verificar si el numero es un numero
en caso de serlo decir 'es un numero'
en caso de no serlo decir 'numero invalido

Aclaracion: Si el dato es null, '' o texto debe ser invalido

Pro tip: isNaN es una funcion a la que si le pasas un dato te dice si es un NAN
Pro tip: prompt retorna un string o null (en caso de que el usario de al boton de cancelar)
    isNaN(null) da false
    isNaN('') da false
*/

//let numero = prompt('Ingrese un numero');
/* 
numero = null

Se puede hacer asi: numero === null || numero === '' || isNaN(numero) 
Pero seria mas facil: !numero || isNaN(numero)
*/
/* let numero = prompt('Ingrese un numero');
if (numero === null || numero === '' || isNaN(numero)) {
    numero = Number(numero)
    alert('Numero invalido');
} else {
    alert('Es un numero');
} */

/* 
3) 
Solicitar 2 numeros y validarlos usando la condicion del enunciado 2)
Solicitar una operacion y validarlo usando la condicion del enunciado 1)
En base a el valor de operacion debera pasar lo siguiente:
    '+': se sumaran los numeros y se mostrara por alerta
    '-': se restaran los numeros y se mostrara por alerta
    '*': se multiplcacaran los numeros y se mostrara por alerta
    '/': se dividiran los numero y se mostraran por alerta

Aclaraciones:
    - No se puede ejecutar la operacion si no se eligio una operacion valida
    - Si se ingreso un numero incorrectamente tampoco podra continuarse con la operacion

Pro tip: 
    - Podes transformar datos con Number(), Boolean(), String()
*/



/* let operacion = prompt()

if(operacion){
    let numero_1 = prompt()
    if(numero_1){
        let numero_2 = prompt()
        if(numero_2){
    
        }
        else{
            //Error
        }
    }
    else{
        //Error
    }
}
else{
    //error
} */

/* let numero = prompt('Ingrese un numero');
if (numero === "" || numero === null || isNaN(numero)) {
    alert('Numero invalido');
} else {
    let numero2 = prompt('Ingrese otro numero');
    if (numero2 === "" || numero2 === null || isNaN(numero2)) {
        alert('Numero invalido');
    } else {
        let operacion = prompt('Ingrese una operacion');
        if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
            alert('Operacion invalida');
        }
        else {
            if (operacion === '+') {
                alert(numero + numero2);
            } else if (operacion === '-') {
                alert(numero - numero2);
            } else if (operacion === '*') {
                alert(numero * numero2);
            } else if (operacion === '/') {
                alert(numero / numero2);
            }
        }
    }
}
 */
/* 
4)
- Agregar soporte para las palabras:

    'sumar', 
    'restar', 
    'multiplicar', '.', 
    'dividir'

    - Explayado: 
        La operacion para sumar puede ser: '+', 'sumar'
*/

/* let numero1 = prompt('ingrese un numero');
let resultado = 0;

if (!numero1 || isNaN(numero1)) {

    alert('no ingreso un numero valido');
}
else {

    let numero2 = prompt('ingrese otro numero');
    if (!numero2 || isNaN(numero2)) {

        alert('no ingreso un numero');
    } else {

        let operacion = prompt('ingrese una operacion (+,-,*,/)');
        numero1 = Number(numero1);
        numero2 = Number(numero2);

        if (operacion === '+' || operacion === 'sumar') {

            operacion = numero1 + numero2;
        }
        else if (operacion === '-' || operacion === 'restar') {

            operacion = numero1 - numero2;
        }
        else if (operacion === '*' || operacion === 'multiplicar') {

            operacion = numero1 * numero2;
        }
        else if (operacion === '/' || operacion === 'dividir') {

            operacion = numero1 / numero2;
        }
        else {

            alert('ingrese una operacion valida');
        }

        resultado = operacion;
        alert(resultado);
    }
}
 */

let numero = prompt('Ingrese un numero');
if (numero === "" || numero === null || isNaN(numero)) {
    alert('Numero invalido');
} else {
    let numero2 = prompt('Ingrese otro numero');
    if (numero2 === "" || numero2 === null || isNaN(numero2)) {
        alert('Numero invalido');
    } else {
        let operacion = prompt('Ingrese una operacion');
        if (operacion !== '+' && operacion!="sumar" && operacion !== '-'&& operacion!="restar"&& operacion !== '*'&& operacion!=="multiplicar" && operacion!=="." && operacion !== '/' && operacion!=="dividir") {
            alert('Operacion invalida');
        }
        else {
            if (operacion === '+'|| operacion==="sumar") {
                alert(number(numero) + number(numero2));
            } else if (operacion === '-' || operacion==="restar") {
                alert(numero - numero2);
            } else if (operacion === '*' || operacion==="multiplicar" || operacion===".") {
                alert(numero * numero2);
            } else if (operacion === '/' || operacion==="dividir") {
                alert(numero / numero2);
            }
        }
    }
}


/* let nombre = 'pepe'

{

    nombre = 'maria'

    console.log(nombre)
}
console.log(nombre)
 */

/* 
    5) REFACTORIZAR

    Nuestra calculadora pedira primero la operacion:

    En base a la operacion deberiamos operar de la siguiente manera:

    '+', 'sumar': 
        - Pedir numero 1 y validar
        - Pedir numero 2 y validar
        - Hacer suma

    '-', 'restar':
        - Pedir numero 1 y validar
        - Pedir numero 2 y validar
        - Hacer resta
    
    '*', 'multiplicar', '.':
        - Pedir numero 1 y validar
        - Pedir numero 2 y validar
        - Hacer multiplicacion
    
    '/', 'dividir':
        - Pedir numero 1 y validar
        - Pedir numero 2 y validar
        - Hacer division

    'iva':
        - Pedir precio 1
        - Pedir tipo factura (puede ser 'A' o 'B') y validar
            - Calcular 21% sobre el precio 1
            - Si tipo_factura es 'A'
                - mostrar el valor del iva
                    Ej: 'El iva del producto es $21 y el precio del producto $100'
            - Si tipo_factura es 'B'
                - mostrar el valor del iva + precio
                    Ej: 'El precio del producto con iva incluido es $121'
    
    'promediar trimestre':
        - pedir nota 1 y validar
        - pedir nota 2 y validar
        - pedir nota 3 y validar
        - sumar todas las notas
        - dividir la suma por 3
        - mostrar resultado
    
    'es mayor', '>':
        - Pedir numero 1 y validar
        - Pedir numero 2 y validar
        - Mostrar si el numero 1 es mayor al numero 2
    
    'es menor', '<':
        - Pedir numero 1 y validar
        - Pedir numero 2 y validar
        - Mostrar si el numero 1 es menor al numero 2
    
    'porcentaje' '%':
        - Pedir numero 1 y validar
        - Pedir numero 2 y validar
        - Mostrar el porcentaje del numero 1 respecto al numero 2
*/
