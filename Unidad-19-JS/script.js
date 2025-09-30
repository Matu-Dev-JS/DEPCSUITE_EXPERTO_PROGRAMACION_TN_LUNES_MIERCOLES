/**
 * Solicita un dato al usuario usando prompt
 * Si devuelve null es porque la operacion se cancelo
 * 
 * @param {string} mensaje_solicitud - El mensaje que se le mostrar al usuario para solicitar el dato.
 * @param {string} mensaje_error - El mensaje de error que se le mostrar al usuario si el dato ingresado no es valido.
 * @param {function} validacionCallback - La funcion que se encargara para validar el dato ingresado.
 */
function solicitarDato (mensaje_solicitud, mensaje_error, validacionCallback){
    //Solicito el dato
    let dato = prompt(mensaje_solicitud)

    //Si no cumple con la validacion designada
    while(!validacionCallback(dato)){
        //Vuelvo a solicitar
        alert(mensaje_error)
        dato = prompt(mensaje_solicitud)
    } 

    //Si todo sale bien retorno el dato
    return dato
}


function validarOperacion (operacion) {
    return (
        operacion === null || operacion.trim() === "" || (operacion !== "sumar" && operacion !== "+" && operacion !== "restar" && operacion !== "-" && operacion !== "multiplicar" && operacion !== "*" && operacion !== "." && operacion !== "dividir" && operacion !== "/" && operacion !== "iva" && operacion !== "mayor que" && operacion !== ">" && operacion !== "menor que" && operacion !== "<" && operacion !== "porcentaje" && operacion !== "%")
    )
}

function validarTexto (texto) {
    return texto !== null && texto.trim() !== "" 
}

function validarNumero (numero){
    return numero !== null && numero.trim() !== "" && !isNaN(numero)
}

function validarNumeroNegativo (numero){
    return validarNumero(numero) && numero < 0
}

function validarNumeroPositivo (numero){
    return validarNumero(numero) && numero > 0
}

//Validar numero par

function validarNumeroPar(numero){
    return validarNumero(numero) && Number(numero) % 2 === 0
}

//Resto division (%) 10 % 2 = 0. 11 % 3 = 2


function solicitarOperacion() {
    //Configura a solicitarDato para que solicite una operacion
    let operacion = solicitarDato(
        'Ingrese un operacion valida',
        'La operacion ingresada es invalido',
        validarOperacion
    )

    return operacion
}

function solicitarnumero(mensaje_solicitud, mensaje_error) {
    let numero = prompt(mensaje_solicitud);
    while (numero === null || numero.trim() === "" || isNaN(numero)) {
        alert(mensaje_error);
        numero = prompt(mensaje_solicitud);
    }
    return Number(numero);
}
function solicitarTexto(mensaje_solicitud, mensaje_error) {
    let texto = prompt(mensaje_solicitud);  
    while (texto === null || texto.trim() === "" ) {
        alert(mensaje_error);
        texto = prompt(mensaje_solicitud);
    }
    return texto;
}



function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
function calcularIva(precio) {
    let iva = precio * 0.21;
    return iva;
}
function calcularPorcentaje(numero, porcentaje) {
    return numero * (porcentaje / 100);
}



let operacion = solicitaroperacion("Ingrese la operación a realizar: \n- sumar o '+' \n- restar o '-'\n- multiplicar o '*' o '.'\n-  dividir o '/'\n- iva \n- mayor que (>)\n- menor que (<)\n- porcentaje (%))", "Error en la operación", "Operación cancelada");

ejecutaroperacion(operacion);

function procedimientoSumar (){
    let numero1 = solicitarnumero("Ingrese el primer numero", "Error al ingresar numero");
    let numero2 = solicitarnumero("Ingrese el segundo numero", "Error al ingresar numero");
    let resultado = sumar(numero1, numero2);
    alert("El resultado de la suma es: " + resultado);
}

function procedimientoResta (){
    let numero1 = solicitarnumero("Ingrese el primer numero", "Error al ingresar numero");
    let numero2 = solicitarnumero("Ingrese el segundo numero", "Error al ingresar numero");
    let resultado = restar(numero1, numero2);
    alert("El resultado de la resta es: " + resultado);
}


function ejecutaroperacion(operacion) {
    if (operacion === "sumar" || operacion === "+") {
        procedimientoSumar()
    } else if (operacion === "restar" || operacion === "-") {
        procedimientoResta()
    } else if (operacion === "multiplicar" || operacion === "*" || operacion === ".") {
        let numero1 = solicitarnumero("Ingrese el primer numero", "Error al ingresar numero");
        let numero2 = solicitarnumero("Ingrese el segundo numero", "Error al ingresar numero");
        let resultado = multiplicar(numero1, numero2);
        alert("El resultado de la multiplicación es: " + resultado);
    }
    else if (operacion === "dividir" || operacion === "/") {
        let numero1 = solicitarnumero("Ingrese el primer numero", "Error al ingresar numero");
        let numero2 = solicitarnumero("Ingrese el segundo numero", "Error al ingresar numero");
        let resultado = dividir(numero1, numero2);
        alert("El resultado de la división es: " + resultado);
    } else if (operacion === "iva") {
        let precio = solicitarnumero("Ingrese el precio", "Error al ingresar numero");
        let iva = calcularIva(precio);
        alert("El IVA es: " + iva);
        let factura = solicitarTexto("Ingrese el tipo de factura (A o B)", "Error al ingresar tipo de factura");
        if (factura === "A" || factura === "a") {
            let precioConIva = precio * 1.21;
            alert("El precio del elemento es: " + precio + " y el precio del IVA es de: " + iva);
        }
        else if (factura === "B" || factura === "b") {
            let precioConIva = precio + iva;
            alert("El precio con IVA para factura B es: " + precioConIva);
        }
        else {
            alert("Tipo de factura incorrecto");
        }
    } else if (operacion === "mayor que" || operacion === ">") {
        let numero1 = solicitarnumero("Ingrese el primer numero", "Error al ingresar numero");
        let numero2 = solicitarnumero("Ingrese el segundo numero", "Error al ingresar numero");
        if (numero1 > numero2) {
            alert("El numero " + numero1 + " es mayor que " + numero2);
        }
        else if (numero1 < numero2) {
            alert("El numero " + numero1 + " es menor que " + numero2);
        }
    } else if (operacion === "menor que" || operacion === "<") {
        let numero1 = solicitarnumero("Ingrese el primer numero", "Error al ingresar numero");
        let numero2 = solicitarnumero("Ingrese el segundo numero", "Error al ingresar numero");
        if (numero1 < numero2) {
            alert("El numero " + numero1 + " es menor que " + numero2);
        }
        else if (numero1 > numero2) {
            alert("El numero " + numero1 + " es mayor que " + numero2);
        }
    } else if (operacion === "porcentaje" || operacion === "%") {
        let numero = solicitarnumero("Ingrese un numero", "Error al ingresar numero");
        let porcentaje = calcularPorcentaje(numero, 10);
        alert("El 10% de " + numero + " es: " + porcentaje);
    }
    else {
        alert("Operación incorrecta");
    }
}
