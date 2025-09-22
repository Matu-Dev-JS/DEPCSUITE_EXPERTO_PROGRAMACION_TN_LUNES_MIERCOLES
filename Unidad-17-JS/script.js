/* Bucles */

/* let numero = prompt('Ingresa el numero') */


/* PRINCIPIO DRY: Dont repeat youself = NO TE REPITAS */
/* 
WHILE: Mientras x condicion se cumpla se repetira x bloque de codigo
*/
/* while (!numero || isNaN(numero)) {
    if (numero === null) {
        alert('Programa cancelado')
        break
    }
    alert('Error, el numero no es valido')
    numero = prompt('Ingresa el numero')
}

if (numero && !isNaN(numero)) {
    alert("Numero valido")
}
 */


/* 
Vamos a tener una variable interna llamada password_db con un valor x de su preferencia
Vamos a solicitar al usuario una password y validaremos que esta sea correcta, si es incorrecta, deberemos decirselo y volver a solicitar

Si el usuario da a cancelar, cortar la operacion
*/

/* const PASSWORD_DB = "1234";
let passwordIngresado = prompt("Ingrese la contraseña");
while (passwordIngresado !== PASSWORD_DB) {
    if (passwordIngresado === null) {
        alert("Saliste del sistema");
        break;
    }
    alert("Error, contraseña inválida");
    passwordIngresado = prompt("Ingrese la contraseña");
}

if (passwordIngresado === PASSWORD_DB) {
    alert("Bienvenido");
}
 */

/* 
- Solicitar una operacion
- Validar que dicha operacion sea "iva" o "descuento"
    - Si no es volver a solicitar, a excepcion de que el usuario de cancelar, en dicho caso cancelar el programa y avisar al usuariio
    - Si la operacion es 'iva' solicitar un numero
        - validar el numero, en caso de no ser correcto volver a solicitar. (el numero debe ser positivo)
        - Si es correcto: mostrar por alerta el 21% del precio ingresado Ej: 'El iva de tu producto es ${resultado}'
    - Si la operacion es 'descuento' solicitar un numero (precio)
        - Validar el numero en caso de no ser correcto volver a solicitar (El numero debe ser positivo)
        - Solicitar un numero de descuento. 
            -Validar el numero de descuento (El numero debe ser positivo y menor a 100)
                -Volver a solicitar en caso de ser incorrecto
                Mostrar por alerta el porcentaje del numero ingresado. Ej:  "El descuento aplicado es de ${resultado}"
*/


/* if(!numero || isNaN(numero)  ){
    alert('Error, el numero no es valido')
    numero = prompt('Ingresa el numero')
    if(!numero || isNaN(numero)  ){
        alert('Error, el numero no es valido')
        numero = prompt('Ingresa el numero')
        if(!numero || isNaN(numero)  ){
            alert('Error, el numero no es valido')
            numero = prompt('Ingresa el numero')
        }
    }
} */

/* let operacion = prompt ("ingrese la opercion (iva o descuento) o cancelar para saloir del programa:");
while( operacion !== "iva" && operacion !== "descuento") {
    if (operacion === null ) {
        alert("cancelaste el programa");
        break
    }
    alert("operacion invalida");
    operacion = prompt("ingrese la operacion (iva o descuento) o cancelar para saloir del programa:");
}
if(operacion === "iva" || operacion === "descuento"){

    if( operacion === "iva" ) {
        let precio = prompt("ingrese el precio");
        while (isNaN(precio) || precio <= 0) {
            alert("precio invalido");
            precio = prompt("ingrese el precio");
        }
        let resultado = precio * 0.21;
        alert('el iva de tu producto es $' + resultado);
    }
    else if(operacion === "descuento") {
        let precio = prompt("ingrese el precio");
        while (isNaN(precio) || Number(precio) <= 0) {
            alert("precio invalido, el precio debe ser mayor a 0 y debe ser un numero");
            precio = prompt("ingrese el precio");
        }
        let descuento = prompt("ingrese el porcentaje (0-100):");
        while (isNaN(descuento)|| Number(descuento) <= 0 || Number(descuento) >= 100) {
            alert("descuento invalido");
            descuento = prompt("ingrese el porcentaje (0-100):");
        }
        let resultado = Number(precio) * (Number(descuento) / 100);
        alert( 'El descuento aplicado es de $' + resultado);
    }
} */

//FOR
//El bucle for lo usamos cuando conocemos el limite de repeticion, es decir cuantas veces queremos que una accion se repita
//Es un bucle de conteo ya que tiene un contador interno para medir la cantidad de iteraciones


for(
    let contador = 1; //Marcamos donde inicia el contador 
    contador <= 10; //Limite, mientras esta condicion se cumpla ejecutar bloque de codigo
    contador = contador + 1 //Incremento: Con que ritmo se incrtementara mi contador
){
    console.log("hola mundo. El contador vale: " + contador)
}

/* 
Solicitar 3 numeros y acumularlos
Ej: 1, 4, 10 
Mostrar por alerta al finalizar la sumatoria entre los numeros es 15
*/

alert("Vamos a sumar 3 numeros");
let suma = 0;
for (let iteracion = 1; iteracion <= 3; iteracion = iteracion + 1) {
    let numero = parseFloat(prompt("Ingrese el numero"));
    suma = suma + numero

}
alert(`La sumatoria entre los numeros es ${suma}`);


/* 
Solicitar 3 notas y calcular el promedio
*/

let acumulador = 0;
for (let i = 1; i <= 3; i++) {
    let numero = prompt(`Ingrese la nota ${i} :`);
    while (isNaN(numero)) {
        if (numero === null) {
            alert("Operación cancelada");
            break;
        }
        alert("Número incorrecto, debe ser un número válido");
        numero = Number(prompt("Ingrese un número:"));
    }
    acumulador = Number(acumulador) + Number(numero);
}
trimestre = acumulador / 3;
alert(`El promedio del trimestre es ${trimestre}`);