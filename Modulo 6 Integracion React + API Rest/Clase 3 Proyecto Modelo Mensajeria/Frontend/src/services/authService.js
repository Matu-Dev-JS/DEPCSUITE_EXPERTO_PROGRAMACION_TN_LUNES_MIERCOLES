

import { ServerError } from "../utils/errorUtils"


const URL_API = import.meta.env.VITE_API_URL

export async function login(email, password) {
    const response_http = await fetch(
        URL_API + '/api/auth/login',
        {
            method: 'POST',
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    password: password,
                    email: email
                }
            )
        }
    )
    const response = await response_http.json()
    if (!response.ok) {
        throw new ServerError(response.message, response.status)
    }
    return response
}

export async function register(username, password, email) {
    const response_http = await fetch(
        URL_API + '/api/auth/register',
        {
            method: 'POST',
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    username: username,
                    password: password,
                    email: email
                }
            )
        }
    )


    const response = await response_http.json()
    if (!response.ok) {
        throw new ServerError(response.message, response.status)
    }
    return response
}
