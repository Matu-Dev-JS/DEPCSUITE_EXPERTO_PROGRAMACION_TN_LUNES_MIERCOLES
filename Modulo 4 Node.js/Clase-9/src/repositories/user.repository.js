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

    }

    getByEmail(){

    }

    getById(){

    }

    create(){

    }

    updateById(){

    }
    
    deleteById(){

    }
}

const userRepository = new UserRepository()

export default userRepository