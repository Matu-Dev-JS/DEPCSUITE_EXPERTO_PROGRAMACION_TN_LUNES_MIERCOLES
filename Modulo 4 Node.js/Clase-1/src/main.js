//Este script lo ejecutara mi PC
//El console.log se ejecutara por TERMINAL
//console.log('Hola mundo desde Node.js')



/* 
Require es una funcion que nos permite importar modulos de otro lugar
'fs' es el modulo nativo de node.js filesystem
El filesystem nos permite tener funciones para modificar el sistema de archivos, por ejemplo podriamos crear o leer un txt
Filesystem NO se puede usar en el navegador

Un modulo nativo es un codigo que ya lo trae node.js por defecto, sin instalar ninguna libreria

*/
/* const filesystem = require('fs') */

/* filesystem.writeFileSync(
    'test.txt',
    'Hola mundo desde node.js',
    {
        encoding: 'utf-8'
    }
) */


/* const clave = filesystem.readFileSync(
    'secreto.txt',
    {
        encoding: 'utf-8'
    }
)

console.log('La clave secreta es: ' + clave) */


/* async function leerClave(){
    //Lo leemos de forma asincronica y readFile retornara una promesas
    const clave = await filesystem.promises.readFile(
        'secreto.txt', 
        {
            encoding: 'utf-8'
        }
    )
    return clave
}

async function mostrarClave (){
    const clave = await leerClave()
    console.log('La clave secreta es: ' + clave)
}

mostrarClave()
console.log('hola mundo') */

//Asincronia con callbacks
/* 
filesystem.readFile(
    'secreto.txt', 
    {encoding: 'utf-8'},
    function (error, data){
        console.log(data)
    }
) 
*/

/* TODO LO RELACIONADO AL DOM YA NO SIRVE ACA, debido a que no hay navegador */

//Require
//Podemos importar modulos nativos
//Podemos importar modulos propios

/* const mathModule = require('./math.js')

console.log(mathModule.sumar(1, 1)) */

/* const {sumar, restar} = require('./math.js') */
const { sumar } = require("./math");


/* 
NO SE VALE USAR SYNC debe ser asincronico con promesas 

Crear un archivo llamado numero-1.txt con un numero random (MANUALMENTE, sin codigo)
Crear un archivo llamado numero-2.txt con un numero random (MANUALMENTE, sin codigo)

Leer el archivo numero-1.txt con node.js y el archivo numero-2.txt

Generar el archivo resultado.txt con node.js con el valor resultante entre la suma de ambos numeros.
*/

const filesystem = require('fs')

async function leerNumero(filePath){
    
}

async function resolverSuma (){
   /*  let numero_1 = await filesystem.promises.readFile()

    await filesystem.promises.writeFile() */
    let numero_1 = await leerNumero('numero-1.txt')
    let numero_2 = await leerNumero('numero-2.txt')
    let resultado = Number(numero_1) + Number(numero_2)
    await filesystem.promises.writeFile('resultado.txt')
}

