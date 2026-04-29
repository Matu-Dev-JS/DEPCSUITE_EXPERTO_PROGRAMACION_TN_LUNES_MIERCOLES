import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { getMyOwnMission } from '../../services/missionsService'
import useRequest from '../../hooks/useRequest'

const HomeScreen = () => {
    const {isLogged, user} = useContext(AuthContext)
    const {sendRequest, response, error, loading} = useRequest()

    function loadMissions (){
        sendRequest(
            getMyOwnMission
        )
    }
    
    useEffect(
        () => {
            loadMissions()
        },
        []
    )

    console.log(response, loading)
    return (
        <div>
            <h1>Bienvenido!! {user.email}</h1>
            <h2>Mis misiones</h2>
            <div>   
                <ul>
                    {
                        response && response.data.missions.map((mission) => (
                            <li key={mission.id}>{mission.title}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default HomeScreen