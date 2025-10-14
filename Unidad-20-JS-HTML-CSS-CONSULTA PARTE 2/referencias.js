

/* let characters = [
    {
        id: 1,
        nombre: 'pepe',
        dinero: 0
    }
]

function findCharacterById (character_id){
    for(let character of characters){
        if(character.id === character_id){
            return character
        }
    }

    return null
}

let character = findCharacterById(1)

character.dinero = 20

//Cuanto dinero tendra Pepe?
console.log(characters[0]) */

/* 
Los datos primitivos al asignarse se transfieren como dato
Los datos objeto (y arrays) al asignarse se transfieren como referencia
*/

/* 
let nombre_1 = 'maria'

let nombre_2 = nombre_1

nombre_2 = 'pepe'

console.log(nombre_1)
 */

let persona_1 = {
    nombre: 'pepe'
}

let persona_2 = persona_1

persona_2.dinero = 20

console.log(persona_1)