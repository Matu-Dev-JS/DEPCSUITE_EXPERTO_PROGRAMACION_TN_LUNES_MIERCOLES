function printReport1_0_0(report) {
    console.log(`El reporte con id ${report.id} tiene una puntuacion ${report.score}. Observaciones: ${report.details}.`)
}
function printReport1_1_0(report) {
    console.log(`El reporte con id ${report.id} tiene una puntuacion ${report.score}. Observaciones: ${report.details.text}. Codigo (si lo hay): ${report.details.code}`)
}
function printReport1_2_0(report) {
    console.log(`El reporte con id ${report.id} tiene una puntuacion ${report.result}. Observaciones: ${report.details.text}. Codigo (si lo hay): ${report.details.code}`)
}



module.exports = {printReport1_0_0, printReport1_1_0, printReport1_2_0}