import ENVIRONMENT from "./config/environment.config.js";
import express from "express";

//Crear una app de express
const app = express();


//Por defecto express no esta preparado para recibir body's en JSON, por ende aunque el cliente envie un json en express se vera un undefined
//Para eso express nos da un middleware que transforma el body de la consulta en JSON en caso de que te envien un JSON
//Un middleware es una funcion que se activara antes (en medio) de llegar a tu consulta

//Cuando una consulta en el header tenga "Content-Type": "application/json" entonces transformara el JSON recibido en objeto de JS\
//En los middlewares IMPORTA MUCHO la posicion, es decir primero verifica si la consulta lleva un JSON en el body y luego va a en endpoint en particular
app.use(express.json())


/* 
Si me llega una consulta HTTP tipo GET a la direccion "/"
Entonces ejecuto la callback
La callback responde como servidor con un HTML
El cliente consultante (en este caso el navegador) recibe el HTML y lo renderiza en la pantalla
*/
app.get(
    '/', //Endpoint
    (request, response) => {
        response.send(
            `
            <h1>Hola desde Express</h1>
            `
        )
    }
)

app.get(
    '/api/test', //Endpoint
    (request, response) => {
        response.send(
            {
                ok: true,
                message:'esto es un test'
            }
        )
    }
)


//CRUD de productos (Create, Read, Update, Delete)

const products = []


/* 
GET no puede recibir body (NO PODEMOS o NO DEBERIAMOS PODER ENVIAR DATOS A UN GET)
GET conceptualmente se usa para leer/obtener datos

EN el protocolo HTTP existen METODOS/VERBOS:
- GET => Lectura de datos
- POST => Crear recursos en el servidor
- PUT => Se usa para actualizar un recurso ya existente
- DELETE => Se usa para eliminar un recurso del servidor

El metodo elegido NO garantiza que esa operacion se haga es decir yo podria crear
POST /api/products que me traiga la lista de productos sin crear NADA del lado del servidor y no pasaria nada malo.
En fondo los metodos tienen una finalidad que es BUENA PRACTICA seguir pero por si solos no significan ni hacen nada

*/

//Crear un producto
app.post(
    '/api/products',
    (request, response) => {
        //Logica para crear producto

        //Request.body nos permite acceder a los datos enviados por el cliente via body

        console.log('body', request.body)

        const {title, price} = request.body

        const new_product = {
            title, 
            price, 
            id: products.length + 1
        }
        products.push(new_product)
        response.send(
            {
                products
            }
        )
    }
)


//Obtener lista de productos
app.get(
    '/api/products',
    (request, response) => {
        response.send({
            products
        })
    }
)


//Mi app se reservara el uso del puerto asignado, y cuando este lista para recibir conexiones, se mostrara un mensaje por consola indicando el puerto en el que esta escuchando
app.listen(
    ENVIRONMENT.PORT, 
    () => {
        console.log(`Servidor escuchando en el puerto ${ENVIRONMENT.PORT}`);
    }
)