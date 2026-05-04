


function randomMiddleware (request, response, next){
    const numero = Math.random()

    if(numero >= 0.5){
        request.suerte = true
    }
    else {
        request.suerte = false
    }

    next()
}

export default randomMiddleware