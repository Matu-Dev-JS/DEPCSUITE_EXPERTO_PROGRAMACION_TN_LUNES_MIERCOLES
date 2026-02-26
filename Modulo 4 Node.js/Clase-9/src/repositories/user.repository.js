/* 
Arquitectura hexagonal Clean Code

- Repositorios: Interactuar con las tablas/colecciones de nuestra DB (Enrealidad con cualquier sistema de persistencia de datos). Se caracterizan por NO tener logica de negocio, solo se encargan de comunicarse con la DB.
    Un repositorio tiene la finalidad de ser una CAPA DE ABSTRACCION de comunicacion con la DB, cosa de que si algun dia migro de DB o tengo que cambiar algunas cosas de mi comunicacion solo interactue con esta CAPA sin afectar el resto del programa
    Por ejemplo: 
        - Si vamos a crear un producto, no es responsabilidad del repositorio el validar que el producto cumpla con las reglas del negocio (por ejemplo que tenga un titulo valido y aceptable)
        Lo que SI vamos a hacer en un repositorio es la logica de crear el usuario, es decir en nuestro caso el codigo de insercion
    Un repositorio suele manejar una entidad y sus relaciones
    Ejemplo:
        - UserRepository maneja todo lo de usuarios, roles_usuarios, accesos_usuarios
        - ProductRepository maneja todo lo de productos y categoria_productos
*/

import pool from "../config/mysql.config.js"


const USER_TABLE = {
    NAME: 'users',
    COLUMNS: {
        ID: 'id',
        PASSWORD: 'password',
        NAME: 'name',
        EMAIL: 'email', 
        TELEPHONE_NUMBER: 'telephone_number',
        CREATED_AT: 'created_at',
        IMG_PROFILE: 'img_profile'
    }
}

class UserRepository {
    getAll(){
        //Hacer el SELECT * FROM users pero sin where
    }

    async getByEmail(user_email){
        
        const [user] = await pool.execute (
            `
            SELECT * FROM ${USER_TABLE.NAME} WHERE ${USER_TABLE.COLUMNS.EMAIL} = ?
            `,
            [user_email]
        )
        const user_found = user[0]
        return user_found
    }

    async getById(user_id){
        const [users] = await pool.execute(
            `
            SELECT * FROM ${USER_TABLE.NAME} WHERE ${USER_TABLE.COLUMNS.ID} = ?
            `,
            [user_id]
        )

        const user_found = users[0]
        return user_found
    }

    async create(
        {
            name,
            password,
            email, 
            telephone_number,
            img_profile
        }
    ){
        const result = await pool.execute(
            `
                INSERT INTO ${USER_TABLE.NAME} 
                (
                    ${USER_TABLE.COLUMNS.NAME},
                    ${USER_TABLE.COLUMNS.PASSWORD},
                    ${USER_TABLE.COLUMNS.EMAIL},
                    ${USER_TABLE.COLUMNS.TELEPHONE_NUMBER},
                    ${USER_TABLE.COLUMNS.IMG_PROFILE}
                )
                VALUES
                (
                    ?,
                    ?,
                    ?,
                    ?,
                    ?
                )
            `,
            [
                name, 
                password, 
                email, 
                telephone_number, 
                img_profile
            ]
        )
        return result[0].insertId || null
    }

    //EJEMPLO DE UPDATE EN SQL
    //Actualiza el nombre y precio del producto con id 8
    //UPDATE productos SET name = 'tabla rosada', price = 40000 WHERE id = 8 

    async updateById(user_id, change_user){
        //change_user es un objeto con los nombres de columnas y sus nuevos valores
        //Ejemplo: change_user = {name: 'pepesito', password: '1234'},  {name: 'pepesito'}
        //Ustedes tendran que leer el objeto change_user e ir generando la query
        //La query generada debe ser algo asi: UPDATE users SET name = ?, password = ? WHERE id = ?
        
        let query = `UPDATE ${USER_TABLE.NAME} SET `

        const values_to_inject = []
        const change_user_values = Object.values(change_user) //Transforma el objeto en un array de valores
        const change_user_properties = Object.keys(change_user) //Transforma el objeto en un array de claves
       
        for(const propiedad of change_user_properties){
            
            query += `${propiedad} = ?`

            const property_index = change_user_properties.indexOf(propiedad)

            //Mientras no sea el ultimo cambio sumo la coma
            if(property_index !== change_user_properties.length - 1){
                query = query + ','
            }

            let property_value = change_user_values[property_index]
            values_to_inject.push(property_value)
        }
        query += ` WHERE id = ${user_id}`
        values_to_inject.push(user_id)
        
        await pool.execute(query, values_to_inject)

    }
    
    deleteById(){

    }
}

const userRepository = new UserRepository()

export default userRepository

/* const changes = {
    name: 'test',
    pass: '123'
}
let result = ''
for(let propiedad in changes){
    const valor_propiedad = changes[propiedad]
    result = result + `${propiedad}: ${valor_propiedad}\n`
}

console.log(result) */

/* `
name: test
pass: 123
` */