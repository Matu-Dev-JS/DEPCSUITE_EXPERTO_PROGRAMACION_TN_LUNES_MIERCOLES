console.log('hola mundo')

/* 
JSON: Javascript Object Notation
Es una forma muy comun de trasmitir datos a traves de las aplicaciones. Por ejemplo, mi servidor trasmite por JSON una lista de productos al frontend
Otro ejemplo:
El frontend envia datos de registro de un nuevo usuario al servidor como JSON, el servidor los recibe y los guarda en la base de datos


FileSystem: modulo nativo de node.js que nos permite manipular archivos

Aclaracion: El modulo fs no siempre podremos usarlo, es especial si nuestro backend sera desplegado en la nube (Por ejemplo en vercel), esto es debido a que los servicios de despliegue en la nube generalmente deshabilitan el modulo fs.
Por eso generalmente si uno quiere manejar archivos y no cuenta con un servidor propio o usa servicios externos, lo que suelen hacer es usar algun servicio de almacenamiento de objetos (como firebase, aws (S3), supabase)
Casos de uso real de fs:
1. descargar padron de estaciones de servicio (.csv)
2. leer mediante node.js con fs el archivo .csv local
3. recorrer las estaciones y poblar la DB
*/

/* 
Filesystem y JSON:
Asi como podemos leer .txt, podemos leer cualquier tipo de archivo, uno muy util es el JSON.

JSON.parse(): convierte un string de JSON a un objeto

Caso de uso:
Quiero mostrar por consola un mensaje incial tipo:
La aplicacion se esta ejecutando correctamente en la version {version}
*/
const filesystem = require('fs')
const { mostrarReportes, obtenerReportesNormalizados } = require('./services/reportes/reportes.service.js')


mostrarReportes()
obtenerReportesNormalizados()




/* 
/* async function readPackageJSON() {
    const json = await filesystem.promises.readFile('package.json', 'utf-8')

    const packageJSON = JSON.parse(json)
    return packageJSON
}


async function initMessage() {
    const packageJSON = await readPackageJSON()
    console.log(`La aplicacion se esta ejecutando correctamente en la version ${packageJSON.version}`)
}

initMessage()

 */



/* 
Leer el archivo para-reportar.json y por cada elemento para reportar deberas crear un nuevo reporte
El a crear reporte tendra este formato: 
    {
        id: (se lo calculas vos),
        resultado: puntaje,
        details: {
            text: menos de 5: 'Muy riesgoso', menos de 7: 'no recomendable', menos de 8: 'aceptable', menos de 9: 'recomendable', menos de 10: 'optimo',
            code: 700 (siempre sera 700)
        },
        version: '1.2.0' (Opcional: Que el nro de version venga de el package.json)
    }
Una vez generada la lista de reportes deberas agregarla a la lista existente de reportes
*/

/* 
Ejemplo de codigo:
const reportes = await readReportes() //Obtenemos lista actual de reportes
const para_reportar = [ {puntaje: 9.5} ]
const reporte_generado = generarReporte(para_reportar[0])// Esto generara el reporte
reportes.push(reporte_generado)
actualizarReportes(reportes) //Escribir el archivo reportes.json donde debera estar agregado el ultimo reporte (Y los previos)
*/