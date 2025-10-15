/* 
Para que sirve el DOM?
- Para manipular el HTML / pagina
*/

//que representa document?
//Representa el documento HTML

//Que tipo de dato es document?
//objeto

//Si quiero obtener x ELEMENTO del HTML como podria hacerlo?

//Obtener un elemento por ID
//document.getElementById()

//Obtener un elemento por selector
//document.querySelector()

//Selector de ID ✅
//let titulo = document.querySelector('#titulo')

//Selector de clase ⚠ (No repitas la clase)
//let contenedor = document.querySelector('.contenedor')

//Selector de etiqueta ❌ (se suele repetir una etiqueta)
//let boton = document.querySelector('button')



//BUENAS PRACTICAS

//PRIMITIVOS
// number, string, bolean, null, undefined

//OBJETO
// array, object


//Los datos que no cambiaran de principio a fin de la ejecucion del programa seran constantes
//Las constantes primitivas suelen ir en mayusculas y con _ (UPPER_SNAKE_CASE)

//const PORCENTAJE_IVA = 21
//const PI = 3.14

//Los datos de tipo objeto (array, objeto) suelen ir en constantes.
//Esto es asi debido a que seran a largo de la ejecucion de mi programa array o objeto
//La referencia del dato objeto se mantiene constante a lo largo del programa

//const carrito = []
//const persona = {}

//Pese a que carrito o persona son constantes, aun asi puedo mutar sus valores internos, la constante me proteje el cambio de valor de la variable mas no los artributos internos

//persona.edad = 20 //✅
//carrito.push(1) //✅

//carrito = 1 //❌ No puedes reasignar a una constante


//Se suele recomendar las constantes tambien en los diccionarios

/* const TITLE_ELEMENT = Object.freeze({
    ID: 'titulo'
})

const AVAILABLE_ROLES_ACTIONS = Object.freeze({
    BOMBA_ATOMICA: 'bomba_atomica',
    READ: 'read',
    POST: 'post',
    DELETE: 'delete',
    PUT: 'put'
})

const AVAILABLE_ROLES = Object.freeze({
    ADMIN: {
        NAME: 'admin',
        ACTIONS: [
            AVAILABLE_ROLES_ACTIONS.READ, 
            AVAILABLE_ROLES_ACTIONS.POST, 
            AVAILABLE_ROLES_ACTIONS.PUT, 
            AVAILABLE_ROLES_ACTIONS.DELETE
        ]
    },
    MAINTAIN: {
        NAME: 'maintain',
        ACTIONS: [
            AVAILABLE_ROLES_ACTIONS.READ, 
            AVAILABLE_ROLES_ACTIONS.POST,
            AVAILABLE_ROLES_ACTIONS.PUT
        ]
    },
    SUPPORT: {
        NAME: 'support',
        ACTIONS: [
            AVAILABLE_ROLES_ACTIONS.DELETE
        ]
    },
    GUESS: {
        NAME: 'guess',
        ACTIONS: [
            AVAILABLE_ROLES_ACTIONS.READ
        ]
    }
})
 */


//El problema de los strings o numero magicos:
//Un string magico es cuando usamos un string en nuestro


/* let titulo = document.querySelector('#titulo')
let titulo2 = document.querySelector('#titulo')

function calcularIva (precio){
    return precio * 0.21
}


function calcular21Porciento (precio){
    return precio * 0.21
} */



/* 
Crear un contador con HTML Y JS

<div>
    <button id='btn-incrementar'>+</button>
    <span id='contador'></span>
    <button id='btn-decrementar'>-</button>
</div>

Crear una variable llamada estado_contador que empiece en 0
Crear 3 funciones

    - renderContador() Tomar el estado_contador y lo mostrara como texto interno (innerText) en el span contador
    - incrementarContador() Incrementar en 1 el contador y renderizar el contador (llamando a renderContador)
    - decrementarContador() decrementar en 1 el contador y renderizar el contador (llamando a renderContador)

Al inciar el programa asegurate de que se llame a renderContador
*/

let estado_contador = 0
const contador = document.getElementById('contador')
const btn_incrementar = document.getElementById('btn-incrementar')
const btn_decrementar = document.getElementById('btn-decrementar')


function renderContador(){
    contador.innerText = estado_contador
}

function incrementarContador(){
    estado_contador = estado_contador + 1
    renderContador()
}

function decrementarContador(){
    estado_contador = estado_contador - 1
    renderContador()
}

/* 
Sirve para asociar funcionalidad a eventos
Params: 
    Event key: string, con el tipo de evento
    accion: function, La accion a realizar al descadenarse ese evento
*/
btn_decrementar.addEventListener(
    'click',
    decrementarContador
)

btn_incrementar.addEventListener(
    'click',
    incrementarContador
)


renderContador()

//Si se intenta hacer el evento 'copy' sobre el span con id no-copiar, mostrar por alerta, 'Ey, no puedes hacer eso'

const no_copiar_HTML = document.getElementById('no-copiar');

function evitarCopia(evento) {
    //Previene el comportamiento por defecto de copiar (Que es guardar en clipboard)
    evento.preventDefault()
    console.log(evento)
    //alert('No se puede copiar el texto');
}

/* 
Add event listener le pasa un parametro cuando invoque a la funcion asociada a el evento
Osea cuano ocurra el evento 'copy', evitar copia recibira un parametro.
No solamente pasa con copy, pasa con TODAS las funciones asociadas a eventos

*/

no_copiar_HTML.addEventListener('copy', evitarCopia);





/* 
Los eventos tienen comportamientos por defecto:

- 'context-menu' (Click derecho) abre el menu contextual

- 'cut' (cortar) Corta un contenido y lo guarda en el clipboard

- 'submit' (enviar formulario) recarga la pagina

- 'copy' (copiar) Copiar el contenido seleciconado y guardarlo en el clipboard
*/

/* 
Si queremos prevenir el comportamiento del evento por defecto, podemos hacerlo mediante
event.preventDefault()
*/