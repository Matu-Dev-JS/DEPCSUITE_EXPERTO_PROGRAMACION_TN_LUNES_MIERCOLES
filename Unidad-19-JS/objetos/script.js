//OBJETOS
/* 
Nos permiten describir una entidad
Nos permiten transferir datos complejos

*/

let argentium = {
    nombre: 'Argentium',
    cantidad_habitantes: 20000,
    "fecha_fundacion": '23/09/1995',
    "identificador universal de pueblos": 'FF1Ku'
}

let invernalia = {
    nombre: 'Invernalia',
    cantidad_habitantes: 50000,
    "fecha_fundacion": '03/02/1708',
    "identificador universal de pueblos": 'FF1Kc'
}

function incrementarHabitantes(pueblo, cantidad_habitantes_nuevos){
    pueblo.cantidad_habitantes = pueblo.cantidad_habitantes + cantidad_habitantes_nuevos
}

function detallarPueblo(pueblo){
    //Notacion de puntos
    console.log('El nombre del pueblo es: ' + pueblo.nombre)

    //notacion de corchetes
    console.log('Se fundo en: ' + pueblo.fecha_fundacion)
    console.log('Tiene ' + pueblo.cantidad_habitantes + ' habitantes')
    console.log('El indentificador universal es: ' + pueblo["identificador universal de pueblos"])
}

detallarPueblo(argentium)


/* 
Datos aleatorios
Declarar 2 objeto personaje
    - nombre
    - dinero
    - vida
    - edad
    - nivel

Declarar 3 objetos item
    -nombre
    -ultimo_costo_mercado
    -nivel
    -rareza (normal, raro, legendario)

El personaje tendra una propiedad llamada mano_derecha que valdra por defecto null

Crear una funcion llamada recogerItem(personaje, item_recogido) y asignara el item_recogido a la propiedad mano_derecha del personaje recibido. Si habia un item previamente, retornarlo.
*/


let renaper_response = {
    "Numero DNI": 77777777,

}


let propiedad_buscada = 'nombre'

/* alert("el valor que buscas es " + argentium[ propiedad_buscada ])
 */
let personaje1 = {
    "nombre": "Heroe",
    "dinero": 1000,
    "vida": 100,
    "edad": 30,
    "nivel": 1
}
let personaje2 = {
    "nombre": "Villano",
    "dinero": 80000,
    "vida": 400,
    "edad": 70,
    "nivel": 12
}
let item1 = {
    "nombre": "baculo negro",
    "ultimo_costo_mercado": 5000,
    "nivel": 5,
    "rareza": "raro"
}
let item2 = {
    "nombre": "Espada",
    "ultimo_costo_mercado": 200,
    "nivel": 1,
    "rareza": "comun"
}
let item3 = {
    "nombre": "arco endemoniado",
    "ultimo_costo_mercado": 100000,
    "nivel": 15,
    "rareza": "legendario"
}

function recogerItem(personaje, item_recogido) {
    let item_previamente = personaje.mano_derecha
    personaje.mano_derecha = item_recogido
    if(item_previamente){
        return item_previamente
    }
    else{
        return null
    }
    
}

console.log(recogerItem(personaje1, item1))
let item_previo = recogerItem(personaje1, item2)
if(item_previo){
    console.log("El item " + item_previo.nombre + ' fue arrojado al suelo')
}


function recogerItem(personaje, item_recogido) {
    let item_mano_derecha = obtenerItemManoDerecha(personaje);
    asignarItemManoDerecha(personaje, item_recogido);
    return item_mano_derecha;
}

function tieneItemEnManoDerecha(personaje) {
    return personaje["mano derecha"] !== null && personaje["mano derecha"] !== undefined;
}
function obtenerItemManoDerecha(personaje) {
    return personaje["mano derecha"];
}
function asignarItemManoDerecha(personaje, item) {
    personaje["mano derecha"] = item;
    return item;
}