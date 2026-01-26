
function normalizeReport1_0_0 (report){
    return {
        result: report.score,
        id: report.id,
        detail_text: report.details,
        version: report.version
    }
}
function normalizeReport1_1_0 (report){
    return {
        result: report.score,
        id: report.id,
        detail_text: report.details.text,
        detail_code: report.details.code,
        version: report.version
    }
}
function normalizeReport1_2_0 (report){
    return {
        result: report.result,
        id: report.id,
        detail_text: report.details.text,
        detail_code: report.details.code,
        version: report.version
    }
}



module.exports = {normalizeReport1_0_0, normalizeReport1_1_0, normalizeReport1_2_0}