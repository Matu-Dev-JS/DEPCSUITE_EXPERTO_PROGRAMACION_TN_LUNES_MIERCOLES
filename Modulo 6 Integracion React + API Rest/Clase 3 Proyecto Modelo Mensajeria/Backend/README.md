# Proyecto Modelo Mensajería - Backend API

API REST para aplicación de mensajería con gestión de espacios de trabajo, canales y mensajes en tiempo real.

## Tecnologías Utilizadas

- **Node.js** con **Express** - Servidor web
- **MongoDB** con **Mongoose** - Base de datos
- **JWT** - Autenticación
- **bcrypt** - Encriptación de contraseñas
- **Nodemailer** - Envío de emails
- **Swagger/OpenAPI** - Documentación interactiva

## Instalación

```bash
npm install
```

Crear archivo `.env` con las siguientes variables:

```env
MONGO_DB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net
MONGO_DB_NAME=nombre_base_datos
JWT_SECRET_KEY=tu_clave_secreta_jwt
GMAIL_USERNAME=tu_email@gmail.com
GMAIL_PASSWORD=tu_app_password
URL_FRONTEND=http://localhost:8080
URL_BACKEND=http://localhost:8082
API_KEY=tu_api_key
```

## Ejecución

```bash
npm run dev    # Desarrollo con hot-reload
npm start      # Producción
```

Servidor corriendo en `http://localhost:8082`

---

## Documentación Swagger

Una vez iniciado el servidor, accede a la documentación interactiva en:

```
http://localhost:8082/api-docs
```

---

## Endpoints de la API

### Autenticación (`/api/auth`)

#### POST `/api/auth/register`
Registra un nuevo usuario en el sistema.

**Headers:**
```
x-api-key: <API_KEY>
Content-Type: application/json
```

**Body:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123",
  "username": "usuario123"
}
```

**Respuestas:**
- `201` - Usuario creado exitosamente (email de verificación enviado)
- `400` - Datos faltantes o email ya registrado
- `401` - API Key inválida

---

#### POST `/api/auth/login`
Inicia sesión con credenciales existentes.

**Headers:**
```
x-api-key: <API_KEY>
Content-Type: application/json
```

**Body:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123"
}
```

**Respuestas:**
- `200` - Login exitoso, retorna `auth_token`
- `400` - Email inválido o faltante
- `401` - Credenciales inválidas o email no verificado
- `401` - API Key inválida

**Respuesta exitosa:**
```json
{
  "message": "Inicio de sesion exitoso",
  "ok": true,
  "status": 200,
  "data": {
    "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

#### GET `/api/auth/verify-email`
Verifica el email del usuario mediante token.

**Query Params:**
```
verification_email_token=<token_jwt>
```

**Respuestas:**
- `302` - Redirección a frontend (email validado)
- `400` - Token no enviado o usuario ya verificado
- `401` - Token inválido
- `404` - Usuario no existe

---

### Espacios de Trabajo (`/api/workspace`)

> **Nota:** Todos los endpoints de workspace requieren autenticación mediante Bearer Token y API Key.

**Headers requeridos:**
```
x-api-key: <API_KEY>
Authorization: Bearer <auth_token>
```

#### GET `/api/workspace/`
Obtiene todos los espacios de trabajo del usuario autenticado.

**Respuestas:**
- `200` - Lista de workspaces
```json
{
  "ok": true,
  "data": {
    "workspaces": [
      {
        "member_id": "...",
        "member_role": "Owner",
        "member_id_user": "...",
        "workspace_image": "url_imagen",
        "workspace_title": "Mi Workspace",
        "workspace_id": "..."
      }
    ]
  }
}
```

---

#### POST `/api/workspace/`
Crea un nuevo espacio de trabajo.

**Body:**
```json
{
  "title": "Mi Espacio de Trabajo",
  "image": "https://url-imagen.com/img.jpg",
  "description": "Descripción opcional"
}
```

**Respuestas:**
- `201` - Workspace creado exitosamente
- `401` - No autorizado

---

#### GET `/api/workspace/:workspace_id`
Obtiene un espacio de trabajo específico (debe ser miembro).

**Respuestas:**
- `200` - Workspace encontrado
- `403` - No perteneces al workspace
- `404` - Workspace no existe

---

#### DELETE `/api/workspace/:workspace_id`
Elimina un espacio de trabajo (solo Owner).

**Respuestas:**
- `200` - Workspace eliminado correctamente
- `403` - No tienes permiso (no eres Owner)
- `404` - Workspace no existe

---

#### POST `/api/workspace/:workspace_id/members`
Invita a un nuevo miembro al workspace (Owner/Admin).

**Body:**
```json
{
  "email": "invitado@ejemplo.com",
  "role": "User"
}
```
**Roles disponibles:** `Owner`, `Admin`, `User`

**Respuestas:**
- `201` - Invitación enviada por email
- `400` - Usuario ya es miembro
- `403` - No autorizado (rol insuficiente)
- `404` - Email del invitado no existe

---

#### GET `/api/workspace/:workspace_id/members/accept-invitation`
Acepta una invitación a un workspace mediante token.

**Query Params:**
```
invitation_token=<token_jwt>
```

**Respuestas:**
- `302` - Redirección al frontend
- `401` - Token inválido

---

#### GET `/api/workspace/:workspace_id/channels`
Obtiene todos los canales de un workspace.

**Respuestas:**
- `200` - Canales obtenidos con éxito
```json
{
  "ok": true,
  "status": 200,
  "message": "Canales obtenidos con exito",
  "data": {
    "channels": [...]
  }
}
```

---

#### POST `/api/workspace/:workspace_id/channels`
Crea un nuevo canal en el workspace (Owner/Admin).

**Body:**
```json
{
  "name": "general"
}
```

**Respuestas:**
- `201` - Canal creado con éxito
- `403` - No autorizado

---

#### POST `/api/workspace/:workspace_id/channels/:channel_id/messages`
Envía un mensaje a un canal.

**Body:**
```json
{
  "content": "Hola, este es un mensaje!"
}
```

**Respuestas:**
- `201` - Mensaje creado con éxito
- `403` - No perteneces al workspace
- `404` - Canal no existe

---

#### GET `/api/workspace/:workspace_id/channels/:channel_id/messages`
Obtiene todos los mensajes de un canal.

**Respuestas:**
- `200` - Mensajes obtenidos con éxito
```json
{
  "ok": true,
  "status": 200,
  "message": "Mensajes obtenidos con exito",
  "data": {
    "messages": [
      {
        "mensaje": "Texto del mensaje",
        "created_at": "2026-01-01T00:00:00.000Z",
        "fk_workspace_member_id": {
          "role": "User",
          "fk_id_user": {
            "username": "usuario123",
            "email": "usuario@ejemplo.com"
          }
        }
      }
    ]
  }
}
```

---

## Modelos de Datos

### User
```javascript
{
  email: String (único, requerido),
  password: String (requerido),
  username: String (requerido),
  created_at: Date,
  active: Boolean (default: true),
  email_verified: Boolean (default: false)
}
```

### Workspace
```javascript
{
  fk_id_owner: ObjectId (ref: User, requerido),
  title: String (requerido),
  image: String,
  description: String,
  created_at: Date,
  active: Boolean (default: true)
}
```

### Channel
```javascript
{
  fk_id_workspace: ObjectId (ref: Workspace, requerido),
  name: String (requerido),
  created_at: Date,
  active: Boolean (default: true)
}
```

### MemberWorkspace
```javascript
{
  fk_id_user: ObjectId (ref: User, requerido),
  fk_id_workspace: ObjectId (ref: Workspace, requerido),
  created_at: Date,
  role: String ('Owner' | 'Admin' | 'User', default: 'User')
}
```

### ChannelMessages
```javascript
{
  mensaje: String (requerido),
  created_at: Date,
  fk_workspace_channel_id: ObjectId (ref: Channel, requerido),
  fk_workspace_member_id: ObjectId (ref: MemberWorkspace, requerido)
}
```

---

## Códigos de Estado

| Código | Descripción |
|--------|-------------|
| 200 | OK - Solicitud exitosa |
| 201 | Created - Recurso creado exitosamente |
| 400 | Bad Request - Datos inválidos o faltantes |
| 401 | Unauthorized - No autenticado o token inválido |
| 403 | Forbidden - Sin permisos suficientes |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

---

## Middlewares

- **API Key** (`x-api-key`): Valida el acceso a la API
- **Auth** (`Authorization: Bearer <token>`): Valida el token JWT y carga datos del usuario en `request.user`
- **Workspace**: Verifica membresía y roles en el workspace
- **Channel**: Verifica que el canal exista y pertenezca al workspace

---

## Estructura del Proyecto

```
Backend/
├── config/              # Configuraciones (env, mail, mongo)
├── controllers/         # Lógica de controladores
├── helpers/             # Clases auxiliares (errores)
├── middlewares/          # Middlewares de autenticación y validación
├── models/              # Esquemas de MongoDB
├── repository/          # Capa de acceso a datos
├── routes/              # Definición de rutas
├── services/             # Lógica de negocio
├── main.js              # Punto de entrada
└── package.json
```
