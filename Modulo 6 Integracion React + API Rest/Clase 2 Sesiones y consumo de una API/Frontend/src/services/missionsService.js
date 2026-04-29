async function getMyOwnMission (){

    const response_http = await fetch(
        'http://localhost:8080/api/missions', 
        {
            method: 'GET',
            headers: {
                //Le indicamos al servidor quien es el usuario
                'Authorization': "Bearer " + localStorage.getItem('auth_token')
            }
        }
    )

    const response = await response_http.json()

    if(!response.ok){
        throw new Error(response.message)
    }

    return response
}

export {getMyOwnMission}