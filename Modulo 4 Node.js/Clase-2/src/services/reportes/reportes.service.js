const filesystem =require('fs')
const { FUNCIONES_REPORTE } = require('./reportes.constants')


/* 
Leer el archivo reportes.json y decir por cada reporte por consola
'El reporte con id {id} tiene una puntuacion {score o resultado}. Observaciones: {detalles}. Codigo (si lo hay): {code}' 

OJO: porque no todos los reportes tienen la misma forma
*/


async function readReportes() {
    const json = await filesystem.promises.readFile('reportes.json', 'utf-8')
    const reportes = JSON.parse(json)

    return reportes
}

async function mostrarReportes (){
    const reportes = await readReportes()
    for(const reporte of reportes){

        FUNCIONES_REPORTE[reporte.version].readReport(reporte)
    }
}

async function obtenerReportesNormalizados (){
    const reportes_crudos = await readReportes()

    const reportes_normalizados = reportes_crudos.map(
        (reporte_crudo) => {
            return FUNCIONES_REPORTE[reporte_crudo.version].normalize(reporte_crudo)
        }
    )
    console.log({reportes_normalizados})
    return reportes_normalizados
}

module.exports = {readReportes, mostrarReportes, obtenerReportesNormalizados}





