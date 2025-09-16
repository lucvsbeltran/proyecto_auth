# Backend Auth + Products (Entrega rápida)

## Requisitos
- Node.js 18+
- MongoDB Atlas (o local)

## Instalación (local)
1. Clona el repo
2. `npm install`
3. Copia `.env.example` a `.env` y completa las variables (`MONGO_URI`, `JWT_SECRET`)
4. `npm run dev`

## Endpoints principales
- POST /api/user/register
- POST /api/user/login
- GET /api/user/verifytoken (requires Bearer token)
- PUT /api/user/update (requires Bearer token)
- POST /api/product/create (protected)
- GET /api/product/readall
- GET /api/product/readone/:id
- PUT /api/product/update/:id (protected, owner/admin)
- DELETE /api/product/delete/:id (protected, owner/admin)

## Ejemplos con curl
Registrar:
```
curl -X POST http://localhost:4000/api/user/register -H "Content-Type: application/json" -d '{"name":"Lucas","email":"lucas@example.com","password":"123456"}'
```

Login:
```
curl -X POST http://localhost:4000/api/user/login -H "Content-Type: application/json" -d '{"email":"lucas@example.com","password":"123456"}'
```

Crear producto (usar token obtenido en login):
```
curl -X POST http://localhost:4000/api/product/create -H "Authorization: Bearer <TOKEN>" -H "Content-Type: application/json" -d '{"name":"Producto A","description":"Desc","price":9.99}'
```

