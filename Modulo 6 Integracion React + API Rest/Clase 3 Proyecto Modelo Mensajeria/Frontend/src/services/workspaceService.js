import { ServerError } from "../utils/errorUtils"

const URL_API = import.meta.env.VITE_API_URL
export async function getWorkspaceList() {
    const response_http = await fetch(
        URL_API + '/api/workspace',
        {
            method: 'GET',
            headers: {
                 'x-api-key': import.meta.env.VITE_API_KEY,
                'Authorization': 'Bearer ' + localStorage.getItem('auth_token'),
            },
        }
    )
    const response = await response_http.json()
    if (!response.ok) {
        throw new ServerError(response.message, response.status)
    }
    return response
}

export async function createWorkspace(workspace_data) {
    const response_http = await fetch(
        URL_API + '/api/workspace',
        {
            method: 'POST',
            headers: {
                 'x-api-key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('auth_token'),
            },
            body: JSON.stringify(workspace_data)
        }
    )
    const response = await response_http.json()
    if (!response.ok) {
        throw new ServerError(response.message, response.status)
    }
    return response
}