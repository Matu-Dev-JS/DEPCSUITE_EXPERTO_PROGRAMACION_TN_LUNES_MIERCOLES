
//EJEMPLO COMUN DE CALLBACKS
/* 
function doSomething(){
    console.log('hola')
}

button.addEventListenner('click', doSomething) 
*/

//Callback: Cuando una funcion recibe otra funcion como parametro
//Metodos para trabajar sobre arrays pero que reciben callbacks

/* 
forEach => Lo usamos cuando queremos ejecutar x accion por cada elemento del array
find => Busca un x elemento dentro de una lista (Busca a UNO), sino lo encuentra devuelve undefined
filter => Buscar todos los elementos que cumplan con una condicion
map => Sirve para transformar tu array en otro array
*/

const nombres = ['pepe', 'juan', 'maria']


/* function mostrarNombre(nombre){
    console.log(nombre)
} */

//Por cada nombre quiero mostrar el nombre por consola (FOR EACH)
//For each internamente recorre el array de nombre y por cada nombre invocara la callback y pasara como parametro de la callback el elemento que se esta recorriendo 
//ES NO MUTABLE
/* nombres.forEach(
    mostrarNombre
) */

//Funcion anonima
/* 
nombres.forEach(
    function(nombre){
        console.log(nombre)
    }
)
 */


//FIND
/* 
Por cada nombre se ejecutara la callback, quien recibira el elemento recorrido y se hara una condicion, si la callback retorna verdadero find se cortara y retorna el elemento que coincida con la condicion, sino lo encuentra sigue al siguiente
MUY IMPORTANTE: La callback debe retornar una condicion
ES NO MUTABLE
*/
/* 
nombres.find(
    (nombre) => {
        return nombre.includes('j')
    }
) */


//FILTER
/* 
Busca todos los elementos que cumplan con una condicion
Filter retorna un array con todos los elementos que cumplieron la condicion
Si el array esta vacio significa que ningun elemento cumplio la condicion
FILTER ES NO MUTABLE, quiere decir que no modifica el array original
*/

/* const nombres_con_a = nombres.filter(
    (nombre) => {
        return nombre.includes('a')
    }
)

console.log(nombres_con_a) */

//MAP 
/* 
Crea un array a partir de otro array
No modifica el array original
La longitud del array resultante es la misma que el array original
LOS elementos del array resultante dependen exclusivamente del retorno de la callback
*/

//Imagenos que tengo la lista de nombres, pero me gustaria crear una lista de usuarios, donde cada usuario sea un objeto con la propiedad name y que ese name guarde el valor del nombre del array

//["pepe", "maria"] -> [{name: 'pepe'}, {name: 'maria}]

/* const usuarios = nombres.map(
    (nombre) => {
        return {name: nombre}
    }
)

console.log(usuarios) */