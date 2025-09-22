/* Bucles */

let numero = prompt('Ingresa el numero')


/* PRINCIPIO DRY: Dont repeat youself = NO TE REPITAS */
/* 
WHILE: Mientras x condicion se cumpla se repetira x bloque de codigo
*/
while (!numero || isNaN(numero)) {
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



/* 
Vamos a tener una variable interna llamada password_db con un valor x de su preferencia
Vamos a solicitar al usuario una password y validaremos que esta sea correcta, si es incorrecta, deberemos decirselo y volver a solicitar

Si el usuario da a cancelar, cortar la operacion
*/

const PASSWORD_DB = "1234";
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