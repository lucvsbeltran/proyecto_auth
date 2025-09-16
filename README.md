Proyecto Backend: Usuarios y Productos

API construida con **Node.js, Express y MongoDB Atlas**.  
Incluye autenticación con **JWT**, asociación de productos al usuario logueado y operaciones CRUD básicas.

---

## ⚙️ Instalación

1. Clonar el repositorio y entrar al proyecto:

```bash
git clone <TU_REPO_URL>
cd mi-proyecto-auth
Instalar dependencias:

bash
Copiar código
npm install
Crear archivo .env en la raíz del proyecto con:

ini
Copiar código
MONGO_URI=TU_MONGO_URI_DE_ATLAS
JWT_SECRET=123456
PORT=4000
Iniciar el servidor:

bash
Copiar código
npm run dev
El servidor escuchará en: http://localhost:4000

🧑‍💻 Endpoints
1️⃣ Registrar Usuario
Método: POST

URL: /api/user/register

Headers:

Content-Type: application/json

Body JSON:

json
Copiar código
{
  "name": "Lucas",
  "email": "lucas@test.com",
  "password": "123456"
}
Respuesta exitosa:

json
Copiar código
{
  "_id": "64f8b123456789...",
  "name": "Lucas",
  "email": "lucas@test.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
Guarda el token para las rutas protegidas.

2️⃣ Login Usuario
Método: POST

URL: /api/user/login

Headers: Content-Type: application/json

Body JSON:

json
Copiar código
{
  "email": "lucas@test.com",
  "password": "123456"
}
Respuesta exitosa:

json
Copiar código
{
  "_id": "64f8b123456789...",
  "name": "Lucas",
  "email": "lucas@test.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
Este token se usará en Authorization: Bearer <TOKEN> para las rutas protegidas.

3️⃣ Crear Producto (Requiere Token)
Método: POST

URL: /api/product/register

Headers:

Content-Type: application/json

Authorization: Bearer <TU_TOKEN_AQUI>

Body JSON:

json
Copiar código
{
  "name": "Notebook Gamer",
  "price": 1200,
  "description": "Laptop con tarjeta gráfica dedicada",
  "stock": 10
}
Respuesta exitosa:

json
Copiar código
{
  "_id": "64f8c987654321...",
  "name": "Notebook Gamer",
  "price": 1200,
  "description": "Laptop con tarjeta gráfica dedicada",
  "stock": 10,
  "user": "64f8b123456789...",
  "createdAt": "2025-09-15T...",
  "updatedAt": "2025-09-15T...",
  "__v": 0
}
4️⃣ Ver Productos del Usuario Logueado
Método: GET

URL: /api/product/

Headers:

Authorization: Bearer <TU_TOKEN_AQUI>

Respuesta exitosa:

json
Copiar código
[
  {
    "_id": "64f8c987654321...",
    "name": "Notebook Gamer",
    "price": 1200,
    "description": "Laptop con tarjeta gráfica dedicada",
    "stock": 10,
    "user": "64f8b123456789...",
    "createdAt": "2025-09-15T...",
    "updatedAt": "2025-09-15T...",
    "__v": 0
  }
]
5️⃣ Ver Perfil del Usuario
Método: GET

URL: /api/user/profile

Headers:

Authorization: Bearer <TU_TOKEN_AQUI>

Respuesta exitosa:

json
Copiar código
{
  "_id": "64f8b123456789...",
  "name": "Lucas",
  "email": "lucas@test.com"
}
📝 Tips para Postman / Thunder Client
Crear una nueva request.

Seleccionar el método HTTP (POST/GET) y pegar la URL.

Pestaña Headers:

Content-Type: application/json

Authorization: Bearer <TOKEN> (solo para rutas protegidas)

Pestaña Body → raw → JSON: pegar el JSON correspondiente.

Hacer clic en Send y revisar la respuesta.

Copiar el token del login para usarlo en rutas protegidas.

✅ Con esto
Registro de usuario

Login + JWT

Crear productos asociados al usuario

Ver productos creados

Ver perfil del usuario




