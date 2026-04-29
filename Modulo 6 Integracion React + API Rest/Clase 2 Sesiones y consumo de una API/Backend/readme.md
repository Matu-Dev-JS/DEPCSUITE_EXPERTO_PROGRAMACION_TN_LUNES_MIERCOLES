Esta API permite la gestion de usuarios y sus respectivas tareas.
Cada tarea pertenece a un usuario.

## Endpoints

### Autenticacion

POST /api/auth/login    Login de un usuario
body:
{
    "email": "string",
    "password": "string"
}

response:
200:
    {
        ok: true,
        data: {
            auth_token: "string"
        }
    }

400: {
    ok: false,
    message: "Credenciales incorrectas" | "El usuario no existe" | "El password es incorrecto"
}
500: {
    ok: false,
    message: "Error interno del servidor"
}