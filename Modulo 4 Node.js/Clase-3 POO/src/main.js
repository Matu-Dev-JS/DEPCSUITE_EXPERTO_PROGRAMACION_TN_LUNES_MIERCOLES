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
function Persona (nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

//Para ejecutar la funcion constructora y "CREAR" una persona debemos usar la palabra reservada new
//Este proceso tecnicamente se lo conoce como instanciar
const persona_1 = new Persona('pepe', 30)
const persona_2 = new Persona('juan', 30)

console.log(persona_1)

/* 
Definir la funcion constructora para 

Personaje 
    - vida: 200
    - nombre
    - edad
    - id
    - nivel: 0

Item
    - titulo
    - nivel
    - descripcion

    y hagan 3 ejemplos de cada uno (Y muestren por consola para verificar)
*/