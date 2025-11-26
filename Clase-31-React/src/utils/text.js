export function limitarPalabras(
    texto, 
    limite_palabras = 10
) {

    const palabras = texto.replaceAll('\n', '').split(' ')
    const palabras_limitadas = palabras.splice(0, limite_palabras)
    return palabras_limitadas.join(' ')
}

/*     let parrafo_original = 'hola mundo que tal'
    let palabras = parrafo_original.split(' ')//['hola', 'mundo', 'que', 'tal]
    const palabras_limitadas = palabras.splice(0, 3)//['hola', 'mundo', 'que']
    let parrafo_limitado = palabras_limitadas.join(' ') */
