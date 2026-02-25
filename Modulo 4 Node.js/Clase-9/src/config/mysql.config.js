import mysql from 'mysql2/promise'
import ENVIRONMENT from './environment.config.js'


//Un singleton es una clase que solo tiene una instancia como maximo
//La pool es un objeto (SINGLETON)
/* 
La pool establece una serie de conexiones con la DB, supongamos 2
Una conexion puede gestionar a la vez una query a la DB, por ejemplo "Seleccionar un usuario por id de la tabla de usuarios"
Una pool en cambio gestiona una serie de conexiones que estan "Latentes"
*/
const pool = mysql.createPool(
    {
        host: ENVIRONMENT.MYSQL_HOST,
        user: ENVIRONMENT.MYSQL_USERNAME,
        password: ENVIRONMENT.MYSQL_PASSWORD,
        database: ENVIRONMENT.MYSQL_DATABASE_NAME,
        port: ENVIRONMENT.MYSQL_PORT,
        connectionLimit: 2
    }
)

export async function checkConnectionDB (){
    try{

        //Esto es una consulta de prueba a la DB para checkear que nos da luz verde
        await pool.execute("SELECT 1")

        console.log("Conexion a la DB exitosa")
    }
    catch(error){
        console.error("La conexion a la DB fallo", error)
    }
}

export default pool


