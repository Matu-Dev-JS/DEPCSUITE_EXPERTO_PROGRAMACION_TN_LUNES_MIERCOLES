
/* class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


class ItemIventario {
    constructor(name, price, cantidad) {
        this.name = name;
        this.price = price;
        this.cantidad = cantidad
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
}


class Persona {
    constructor(name, age, life_points) {
        this.name = name;
        this.age = age;
        this.life_points = life_points
    }
    presentarse (){
        console.log(`Hola yo soy ${this.name}`)
    }
}
 */
/* 
extends es una palabra reservada que se usa para marcar que una clase recibira una herencia de otra clase
Por ejemplo
    - Caballero hereda de Persona
    - Auto hereda de Vehiculo
    - Arma hereda de Item
La clase resultante de esta herencia tendra todas las propiedades y metodos de la clase padre
Siempre la clase resultante tendra como minimo lo mismo que la clase padre (generalmente tiene cosas de mas)
El constructor de la nueva clase recibira lo que ustedes coinsideren como necesario para crear ese nuevo objeto

super es la invocacion de la funcion constructora (constructor) de la clase padre
*/

/* class Caballero extends Persona {
    constructor(name, age, life_points, arma_preferida, fecha_juramento){
        super(name, age, life_points)
        this.arma_preferida = arma_preferida
        this.fecha_juramento = fecha_juramento
    }
    
    pelear(){
        console.log(`Por el rey! ahggg!`)
    }
}

const pablo = new Caballero('Pablo', 31, 200, 'Espada larga', new Date())
const juancito = new Persona('Juancito', 27, 100)

const juancitoCaballero = new Caballero (
    juancito.name, 
    juancito.age, 
    juancito.life_points, 
    'daga',
    new Date()
)
 */
/* 
AccionHistorial
    - id
    - descripcion
    - fecha

AccionInicioSesionHistorial
    - id
    - descripcion: Debe ser 'Alguien inicio sesion con tu cuenta'
    - fecha
    - dispositivo_origen (string),
    - auth_type: ('google 0auth', 'github', 'email') (No hace falta que validen)

AccionActualizarPerfilHistorial
    - id
    - descripcion: Debe ser 'Un campo del perfil se actualizo'
    - fecha
    - nombre_campo_actualizado: (por ejemplo 'username' o 'email')
    - valor_campo_actualizado: (por ejemplo 'pepesito' o 'pepesito@gmail.com')
    - valor_campo_anterior: (por ejemplo 'pepesito' o 'pepesito@gmail.com')
*/

/* class AccionHistorial {
    constructor (id, descripcion, fecha){
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
    }
}

class AccionInicioSesionHistorial extends AccionHistorial{
    constructor(id, fecha, dispositivo_origen, auth_type){
        super(id, 'Alguien inicio sesion con tu cuenta', fecha)
        this.dispositivo_origen = dispositivo_origen
        this.auth_type = auth_type
    }
}

class AccionActualizarPerfilHistorial extends AccionHistorial{
    constructor(id, fecha, nombre_campo_actualizado, valor_campo_actualizado, valor_campo_anterior){
        super(id, `Un campo del perfil se actualizo`, fecha)
        this.nombre_campo_actualizado = nombre_campo_actualizado
        this.valor_campo_actualizado = valor_campo_actualizado
        this.valor_campo_anterior = valor_campo_anterior
    }
}

const accion_generica = new AccionHistorial(1, 'Alguien hizo algo', new Date())
const accion_inicio_sesion = new AccionInicioSesionHistorial(2, new Date(), 'PC', 'email')
const accion_actualizar_perfil = new AccionActualizarPerfilHistorial(3, new Date(), 'username', 'pepesito', 'pepe')

console.log(accion_generica)
console.log(accion_inicio_sesion)
console.log(accion_actualizar_perfil)


class Humano {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    saltar(){
        console.log(`Estoy saltando`)
    }

    comer(comida){
        console.log(`Estoy comiendo ${comida}`)
    }

    dormir (horas){
        console.log(`Estoy durmiendo ${horas} horas`)
    }
}

class SuperHumano extends Humano {
    constructor(nombre, edad, superpoderes){
        super(nombre, edad)
        this.superpoderes = superpoderes
    }

    saltar(){
        console.log(`Estoy saltando super alto`)
    }
}

const superman = new SuperHumano('Clark Kent', 30, ['volar', 'super fuerza'])

superman.comer('pizza')
superman.saltar() */


/* 
Item
    - id
    - titulo
    - nivel
    - descripcion
    - describir() Relatara por consola como se ve el objeto

ItemsLista 
    - items (array de items globales, osea todos los items del "juego")
    - crear(titulo, nivel, descripcion) agrega a la lista de items con un nuevo id
    - eliminar(id_item) elimina un item de la lista
    - obtenerPorId(id_item) obtener el item con ese id

CasilleroInventario
    - id
    - cantidad (ojo, este puede ser 0, que significa que el casillero esta vacio)
    - x
    - y
    - numero
    - id_item (ojo, este puede ser null, que significa que el casillero esta vacio)


Iventario
Un inventario tendra slots, los slots son los casilleros del inventario
Un inventario tendra dimensiones por ejemplo 3x2 o 4x4 o la combinacion que se desee
Un inventario tendra esta forma:
{
    filas: 3,
    columnas: 2,
    cantidad_maxima_por_casillero: 64,
    items: [
        [
            {id: 1, x: 1, y: 1, cantidad: 0, id_item: null},
            {id: 2, x: 2, y: 1, cantidad: 0, id_item: null},
            {id: 3, x: 3, y: 1, cantidad: 0, id_item: null}
        ],
        [
            {id: 4, x: 1, y: 2, cantidad: 0, id_item: null},
            {id: 5, x: 2, y: 2, cantidad: 0, id_item: null},
            {id: 6, x: 3, y: 2, cantidad: 0, id_item: null}
        ]
    ]
}

new Iventario(filas, columnas, cantidad_maxima_por_casillero)
    - filas
    - columnas
    - cantidad_maxima_por_casillero
    - items

- agregarItem(id_item, fila, columna, cantidad): 
    Verificar que el item exista
    Si existe:
        Verificar si en esa posicion no hay un item
            Si no hay:
                Agregan el item (modificando el casillero)
            Si hay algo:
                Verificar si el item_id es el mismo que el que se quiere agregar
                    Si es el mismo:
                        Sumar cantidades y verificar que no supere el maximo
                            Si no supera:
                                Agregar
                            Si supera:
                                decir por consola: "error, casillero ya esta lleno"
                    Si no es el mismo:
                        decir por consola: "error, casillero ya ocupado"
    Si no existe:
        decir por consola: "error, Item no encontrado"

    
*/

/* class Item {
    constructor(id, titulo, nivel, descripcion) {
        this.id = id
        this.titulo = titulo
        this.nivel = nivel
        this.descripcion = descripcion
    }
    describir() {
        console.log(`id: ${this.id}, titulo: ${this.titulo}, nivel: ${this.nivel}, descripcion: ${this.descripcion}`)
    }
}
class ItemInventario extends Item{
    constructor(id, titulo, nivel, descripcion, cantidad) {
        super(id, titulo, nivel, descripcion)
        this.cantidad = cantidad
    }
}
const item = new Item('1', 'espada', '40', 'una espada de madera muy debil')
const itemInventario = new ItemInventario('2', 'espada', '5', 'una espada de diamante', '1')
item.describir()
itemInventario.describir() */

/* class Inventario {
    constructor(filas, columns, cantidad_maxima_por_casillero){
        this.filas = filas
        this.columns = columns,
        this.cantidad_maxima_por_casillero = cantidad_maxima_por_casillero
        this.items = []

    }
} */

//Recomendacion
/* 
Primero creen un array con las filas (osea y)
Luego prueben crear ese mismo array con las columns (osea x)
Por ultimo crear un casillero por cada elemento 
1.
[
'fila-1',
'fila-2',
'fila-3'
]
2. 
[
    [
        'columna-1',
        'columna-2',
        'columna-3'
    ],
    [
        'columna-1',
        'columna-2',
        'columna-3'
    ],
    [
        'columna-1',
        'columna-2',
        'columna-3'
    ]
]
3.
Definen casilleros en vez de strings
*/


/* Definir como es cada item del juego y como se pueden comportar */
class Item {
    constructor(id, titulo, nivel, descripcion) {
        this.id = id
        this.titulo = titulo
        this.nivel = nivel
        this.descripcion = descripcion
    }
    describir() {
        console.log(`id: ${this.id}, titulo: ${this.titulo}, nivel: ${this.nivel}, descripcion: ${this.descripcion}`)
    }
}


/* 
Nos permitira manejar la lista de items globales del juego
*/
class ItemsLista {
    constructor() {
        this.items = []
    }
    crear(titulo, nivel, descripcion) {
        const id = this.items.length + 1
        const item = new Item(id, titulo, nivel, descripcion)
        this.items.push(item)
        return item
    }
    eliminar(id_item) {
        const index = this.items.findIndex(item => item.id === id_item)
        if (index !== -1) {
            this.items.splice(index, 1)
        }
    }
    obtenerPorId(id_item) {
        return this.items.find(item => item.id === id_item)
    }
}

const manager_items_globales = new ItemsLista()
manager_items_globales.crear("pocion de vida", 1, "es una pocion que cura 50 de vida por 5 minutos")
manager_items_globales.crear("pocion de rapidez", 2, "es una pocion que te hace ir el doble de rapido por 5 minutos")
manager_items_globales.crear("libro emarcado", 3, "Es solo un libro")





/* 
Es la clase encargada de manejar un slot
    En teoria esta clase deberia tener todas las acciones de un slot:
        - vaciar
        - modificarCantidad
        - agregar
*/
class CasilleroInventario {
    constructor({id, cantidad, x, y, number, id_item}) {
        this.id = id
        this.cantidad = cantidad
        this.x = x
        this.y = y
        this.number = number
        this.id_item = id_item
    }



    setCantidad(cantidad){
        this.cantidad = cantidad
    }

    setIdItem(id_item){
        this.id_item = id_item
    }


    //La responsabilidad de set item es determinar como se cambia el item en un casillero
    changeItem(id_item, cantidad){
        if(this.isEmpty()){
            this.setIdItem(id_item)
            this.setCantidad(cantidad)
        }
        else if(this.isAlready(id_item)){
            this.setCantidad( this.cantidad + cantidad )
        }
        else{
            console.log("Error, casillero ya ocupado")
        }
    }

    isEmpty(){
        return this.id_item === null
    }

    isAlready(id_item){
        return this.id_item === id_item 
    }

}



class Inventario {
    constructor({filas, columnas, cantidad_maxima_por_casillero}) {
        this.filas = filas
        this.columnas = columnas
        this.cantidad_maxima_por_casillero = cantidad_maxima_por_casillero

        this.slots = []

        //Se generan los casilleros dependiendo de las dimensiones del inventario
        let contador_id = 1
        for (let y = 1; y <= this.filas; y++) {
            //Crear la fila
            const fila = []

            for(let x = 1; x <= this.columnas; x++){

                //Genero y agrego el casillero a la fila
                fila[x - 1] = new CasilleroInventario({
                    id: contador_id, 
                    cantidad: 0, 
                    x: x, 
                    y: y, 
                    number: contador_id, 
                    id_item: null
                })

                //actualizo el contador
                contador_id = contador_id + 1
            }

            //Agregamos la fila al inventario
            this.slots[y - 1] = fila
        }
     

    }
    
    agregarItem(id_item, fila, columna, cantidad) {
        const item_existe = manager_items_globales.obtenerPorId(id_item)
        if(!item_existe){
            return console.log("error, Item no encontrado")
        }

        const casillero_seleccionado = this.slots[fila - 1][columna - 1]
        if(!casillero_seleccionado){
            return console.log("error, coordenadas inválidas")
        }

        if(
            casillero_seleccionado.isAlready(id_item) 
            && 
            this.exceedsMaximunLimit(casillero_seleccionado.cantidad + cantidad)
        ){
            console.log("error, casillero ya esta lleno")
        }

        casillero_seleccionado.changeItem(id_item, cantidad)
    }

    exceedsMaximunLimit(cantidad){
        return cantidad > this.cantidad_maxima_por_casillero
    }
}



const mochila = new Inventario(
    {
        filas: 2,
        columnas: 2, 
        cantidad_maxima_por_casillero: 10
    }
)

console.log("hola")