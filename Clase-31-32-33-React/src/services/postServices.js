/* 
Crear la funcion getPosts 
Debera hacer un fetch con method GET a https://jsonplaceholder.typicode.com/posts
Mostrar por consola el resultado de la API
*/
/* 
Los servicios son aquellas consultas externas a nuestra APP:
- OpenIA
- JsonPlaceholder API
- API interna

*/
async function getPosts() {
    
    let response_http = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'GET'
        }
    )
    const response = await response_http.json()
    return response
}

export {getPosts}