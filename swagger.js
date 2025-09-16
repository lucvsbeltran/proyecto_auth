const YAML = require('yamljs');
const swaggerDocument = YAML.parse(`
openapi: 3.0.0
info:
  title: API Auth + Products
  version: 1.0.0
servers:
  - url: http://localhost:4000
paths:
  /api/user/register:
    post:
      summary: Registrar usuario
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                email:
                  type: string
                password:
                  type: string
      responses:
        '201':
          description: Usuario creado
  /api/user/login:
    post:
      summary: Login
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                password:
                  type: string
      responses:
        '200':
          description: Login exitoso
`);

module.exports = swaggerDocument;
