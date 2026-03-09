## Mongoose

Esta libreria nos permite interactuar facilmente con MongoDB ya sea atlas o cualquier servicio cloud (o local) que tenga instancias de mongoDB
Esta libreria es la mas POPULAR y PROFESIONAL para interactuar con MongoDB
Una de las caracteristicas mas IMPORTANTES de mongoose es que nos permite esquematizar la DB, basicamente soluciona el MAYOR problema de trabajar con MONGODB que es la forma caotica en la que se almacenan los datos al ser FREE SCHEMA

Nos permite implementar esquemas para nuestras colecciones, estos esquemas permiten determinar de forma programatica la forma de los datos que seran almacenados.

Por ejemplo: 
    Primero defino que es un producto y sus caracteristicas:
        _id: ObjectID
        titulo: String
        descripcion: String
        precio: number

    Luego asigno esta definicion (esquema) a una coleccion:
        La coleccion Products va a tener el esquema de productos

    Por ultimo interactuo mediante el esquema con esa coleccion