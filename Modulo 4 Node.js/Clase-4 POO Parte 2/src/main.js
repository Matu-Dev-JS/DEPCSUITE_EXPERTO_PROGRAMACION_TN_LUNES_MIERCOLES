
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
    - number
    - id_item (ojo, este puede ser null, que significa que el casillero esta vacio)


Aclaraciones:
- No existe inventario AUN
- CasilleroInventario por ende no tiene uso AUN
- Creen almenos 5 items de prueba mediante el metodo .crear


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