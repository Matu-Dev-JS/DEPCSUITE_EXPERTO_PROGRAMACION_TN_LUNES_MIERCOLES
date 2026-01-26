const { normalizeReport1_0_0, normalizeReport1_1_0, normalizeReport1_2_0 } = require("./reporte-normalize.service.js")
const { printReport1_0_0, printReport1_1_0, printReport1_2_0 } = require("./reporte-print.service.js")

const FUNCIONES_REPORTE = {
    "1.0.0": {
        readReport: printReport1_0_0,
        normalize: normalizeReport1_0_0
    },
    "1.1.0": {
        readReport: printReport1_1_0,
        normalize: normalizeReport1_1_0
    },
    "1.2.0": {
        readReport: printReport1_2_0,
        normalize: normalizeReport1_2_0
    }
}

module.exports = {FUNCIONES_REPORTE}