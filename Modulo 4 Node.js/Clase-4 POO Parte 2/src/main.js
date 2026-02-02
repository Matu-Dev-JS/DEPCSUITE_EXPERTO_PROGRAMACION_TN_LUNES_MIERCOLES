
class Item {
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

class Caballero extends Persona {
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