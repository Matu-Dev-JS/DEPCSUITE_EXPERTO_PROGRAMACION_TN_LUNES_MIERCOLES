/* 
Crear la funcion doAndLogAction
Parametros:
    - description action log  Ejemplo: 'Estoy ejecutando una accion'
    - actionCallback La accion a ejecutar


Ejemplo de uso 
    doAndLogAction(
        'Estoy ejecutando una suma', 
        function(){
            let dato_1 = prompt('Ingrese numero 1')
            let dato_2 = prompt('Ingrese numero 2')
            alert(Number(dato_1) + Number(dato_2))
        }
    )
    Esto ejecutara 'Estoy ejecutando una suma' por consola
    y luego ejecutara la callback (osea la logica de la suma)
*/

/* 
function doAndLogAction(mensaje, callback){
    console.log(mensaje)
    callback()
}
doAndLogAction(
    'Estoy ejecutando una suma', 
    function(){
        let numero_1 = prompt('Ingrese numero 1')
        let numero_2 = prompt('Ingrese numero 2')
        alert(Number(numero_1) + Number(numero_2))
    }
)
 */