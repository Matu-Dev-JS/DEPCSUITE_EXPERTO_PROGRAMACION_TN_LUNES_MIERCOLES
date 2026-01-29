//ACLARACION:
/* 
Hoy en dia usamos programacion funcional, esto que vamos a aprender es un substituto de la programacion funcional, PERO TODO LO QUE PODEMOS HACER CON PROGRAMACION FUNCIONAL, LO PODEMOS HACER CON PROGRAMACION ORIENTADA A OBJETOS Y VICEVERSA
*/

//Programacion Orientada a Objetos
/* 
Todas las funcionalidades y estados de nuestra aplicacion se agrupen en objetos
Tenerlo de esta manera nos aporta mas robustez y estructura en el codigo pero menos flexibilidad y mas complejidad

El codigo escrito con POO es mas verboso, quiere decir es mas extenso
*/


//Crear objetos

//Objeto literal
/* 
let persona_1 = {nombre: 'pepe', edad: 30}
let persona_2 = {nombre: 'pepe', edad: 30} 
*/



//Funcion constructora ES5 e inferiores
/* 
This toma un valor distinto dependiendo el contexto en el que es llamado, en el contexto de funcion constructora this es una referencia al objeto que se creara a partir de la funcion
Las funciones constructoras deben ser definidas con la primera letra mayuscula
*/
/* function Persona (nombre, edad){
    this.nombre = nombre
    this.edad = edad
    
} */


//Metodo
//Es una funcioncionalidad sobre la definicion de persona, esto nos asegura que solo las Personas tengan acceso a presentacion
/* Persona.prototype.presentacion = function (){
    console.log('Hola me llamo ' + this.nombre + ' y tengo una edad de ' + this.edad)
} */


//Para ejecutar la funcion constructora y "CREAR" una persona debemos usar la palabra reservada new
//Este proceso tecnicamente se lo conoce como instanciar
/* const persona_1 = new Persona('pepe', 30)
persona_1.nombre = 'pepesito'
const persona_2 = new Persona('juan', 30) */

//Asi se invoca un metodo
/* persona_1.presentacion() */
/* 
Definir la funcion constructora para 

Personaje 
    - vida: 200
    - nombre
    - edad
    - id
    - nivel: 0
    - revisarVida() Dependiendo de si la vida es menor a 10 dira 'Necesito curarme ya mismo' pero si es menor a 50 dira 'debo tomar un descanso pronto' y si es mayor a 50 dira 'Estoy de lujo'
    - presentarse() Dira por consola 'Yo soy {nombre} y tengo {edad} años'


Item
    - titulo
    - nivel
    - descripcion
    - describir() Relatara por consola como se ve el objeto

    y hagan 3 ejemplos de cada uno (Y muestren por consola para verificar)
*/

/* function Personaje ( nombre, edad, id){
    this.vida= 200;
    this.nombre= nombre;
    this.edad= edad;
    this.id= id;
    this.nivel= 0;
}
function Item (titulo, nivel, descripcion){
    this.titulo= titulo;
    this.nivel= nivel;
    this.descripcion= descripcion;
}
const personaje_1= new Personaje('Adriel', 23, 1);
const personaje_2= new Personaje('Lucia', 22, 2);
const personaje_3= new Personaje('Carlos', 25, 3);
const item_1= new Item('Espada', 1, 'Espada de acero');
const item_2= new Item('Escudo', 1, 'Escudo de madera');
const item_3= new Item('Pocion', 1, 'Pocion de vida');
 */

class Persona {

    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.estaVivo = true
    }
    presentarse(){
        console.log('Hola me llamo ' + this.nombre + ' y tengo una edad de ' + this.edad)
    }
}

const persona_1 = new Persona('pepe', 30)
console.log(persona_1)
persona_1.presentarse()


/* 
Definir las siguientes clases
Personaje 
    - vida: 200
    - nombre
    - edad
    - id
    - nivel: 0
    - revisarVida() Dependiendo de si la vida es menor a 10 dira 'Necesito curarme ya mismo' pero si es menor a 50 dira 'debo tomar un descanso pronto' y si es mayor a 50 dira 'Estoy de lujo'
    - presentarse() Dira por consola 'Yo soy {nombre} y tengo {edad} años'


Item
    - id
    - titulo
    - nivel
    - descripcion
    - describir() Relatara por consola como se ve el objeto


ItemInventario
    - id
    - titulo
    - nivel
    - descripcion
    - cantidad
    - describir() Relatara por consola como se ve el objeto

Inventario
    - id
    - items (tendra un array de items, incialmente vacio)
    - cantidad_maxima_espacios (el limite de items disntintos que puede tener nuestro inventario) 
    - agregarItem(item): 
        verificar si el item existe actualmente en la lista de items, si ya existe se modificara el ItemInventario para que su cantidad sea uno mas
        Sino verificar que no se haya llegado o superado la cantidad maxima de espacios y ahi  
        lo agregara con cantidad 1 (Cuando lo agrega, lo agregara como ItemInventario)
        
    
    - eliminarItemPorId(id) 
        Elimina el item si lo encuentra

    - soltarUnItemPorId(id)
        Buscara el item a soltar, si existe verificara la cantidad
            Si es mayor a 1:
                decrementara la cantidad en 1
            Sino
                Eliminara el item del inventario (this.eliminarItemPorId(id))



EJEMPLO de Inventario
{
    id: 1,
    items: [
        {
            id: 1,
            titulo: 'espada larga',
            descripcion: 'una espada muy larga',
            nivel: 1,
            cantidad: 1
        }
    ]
}
*/
