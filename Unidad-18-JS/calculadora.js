
let operacion = prompt("Ingrese la operación a realizar: \n- sumar o '+' \n- restar o '-'\n- multiplicar o '*' o '.'\n-  dividir o '/'\n- iva \n- mayor que (>)\n- menor que (<)\n- porcentaje (%))");
if (operacion === "sumar" || operacion === "+") {
    let numero1 = prompt("Ingrese el primer numero");
    if (numero1 == "" || numero1 === null || isNaN(numero1)) {
        alert("No es un numero");
    } else {
        numero1 = Number(numero1);
        let numero2 = prompt("Ingrese el segundo numero");
        if (numero2 == "" || numero2 === null || isNaN(numero2)) {
            alert("No es un numero");
        } else {
            numero2 = Number(numero2);
        }
        let resultado = numero1 + numero2;
        alert("El resultado de la suma es: " + resultado);
    }
} else if (operacion === "restar" || operacion === "-") {
    let numero1 = prompt("Ingrese el primer numero");
    if (numero1 == "" || numero1 === null || isNaN(numero1)) {
        alert("No es un numero");
    } else {
        numero1 = Number(numero1);
        let numero2 = prompt("Ingrese el segundo numero");
        if (numero2 == "" || numero2 === null || isNaN(numero2)) {
            alert("No es un numero");
        } else {
            numero2 = Number(numero2);
        }
        let resultado = numero1 - numero2;
        alert("El resultado de la resta es: " + resultado);
    }
} else if (operacion === "multiplicar" || operacion === "*" || operacion === ".") {
    let numero1 = prompt("Ingrese el primer numero");
    if (numero1 == "" || numero1 === null || isNaN(numero1)) {
        alert("No es un numero");
    } else {
        numero1 = Number(numero1);
        let numero2 = prompt("Ingrese el segundo numero");
        if (numero2 == "" || numero2 === null || isNaN(numero2)) {
            alert("No es un numero");
        } else {
            numero2 = Number(numero2);
        }
        let resultado = numero1 * numero2;
        alert("El resultado de la multiplicación es: " + resultado);
    }
} else if (operacion === "dividir" || operacion === "/") {
    let numero1 = prompt("Ingrese el primer numero");
    if (numero1 == "" || numero1 === null || isNaN(numero1)) {
        alert("No es un numero");
    } else {
        numero1 = Number(numero1);
        let numero2 = prompt("Ingrese el segundo numero");
        if (numero2 == "" || numero2 === null || isNaN(numero2)) {
            alert("No es un numero");
        } else {
            numero2 = Number(numero2);
        }
        let resultado = numero1 / numero2;
        alert("El resultado de la división es: " + resultado);
    }
} else if (operacion === "iva") {
    let precio = prompt("Ingrese el precio");
    if (precio == "" || precio === null || isNaN(precio)) {
        alert("No es un numero");
    } else {
        precio = Number(precio);
        let iva = precio * 0.21;
        alert("El IVA es: " + iva);
        let factura = prompt("Ingrese el tipo de factura (A o B)");
        if (factura === "A" || factura === "a") {
            let precioConIva = precio * 1.21;
            alert("El precio del elemento es: " + precio + " y el precio del IVA es de: " + iva);
        } else if (factura === "B" || factura === "b") {
            let precioConIva = precio + iva;
            alert("El precio con IVA para factura B es: " + precioConIva);
        } else {
            alert("Tipo de factura incorrecto");
        }
    }
} else if (operacion === "mayor que" || operacion === ">") {
    let numero1 = prompt("Ingrese el primer numero");
    if (numero1 == "" || numero1 === null || isNaN(numero1)) {
        alert("No es un numero");
    } else {
        numero1 = Number(numero1);
        let numero2 = prompt("Ingrese el segundo numero");
        if (numero2 == "" || numero2 === null || isNaN(numero2)) {
            alert("No es un numero");
        } else {
            numero2 = Number(numero2);
        }
        if (numero1 > numero2) {
            alert("El numero " + numero1 + " es mayor que " + numero2);
        } else if (numero1 < numero2) {
            alert("El numero " + numero1 + " es menor que " + numero2);
        }
    }
} else if (operacion === "menor que" || operacion === "<") {
    let numero1 = prompt("Ingrese el primer numero");
    if (numero1 == "" || numero1 === null || isNaN(numero1)) {
        alert("No es un numero");
    } else {
        numero1 = Number(numero1);
        let numero2 = prompt("Ingrese el segundo numero");
        if (numero2 == "" || numero2 === null || isNaN(numero2)) {
            alert("No es un numero");
        } else {
            numero2 = Number(numero2);
        }
        if (numero1 < numero2) {
            alert("El numero " + numero1 + " es menor que " + numero2);
        } else if (numero1 > numero2) {
            alert("El numero " + numero1 + " es mayor que " + numero2);
        }
    }
} else if (operacion === "porcentaje" || operacion === "%") {
    let numero = prompt("Ingrese un numero");
    if (numero == "" || numero === null || isNaN(numero)) {
        alert("No es un numero");
    } else {
        numero = Number(numero);
        let porcentaje = numero * 0.1;
        alert("El 10% de " + numero + " es: " + porcentaje);
    }
} else {
    alert("Operación incorrecta");
}