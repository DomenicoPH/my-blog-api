## NestJS
- [NestJS Docs - First Steps](https://docs.nestjs.com/first-steps)

## Comandos de inicio

    npm i -g @nestjs/cli        // Instala NestJS CLI
    nest new project-name       // Crea nuevo proyecto

    cd my-blog-api                  // Ir ala carpeta del proyecto
    npm run start                   // Inicia app
    npm run start:dev               // Inicia app en dev

    export PORT=4001
    npm run start:dev --port 4001   // Inicia app en dev en port 4001

## Controllers

  nest g controller users

---

# -- NOTES --

[GET] https://localhost:3001/users          --> Retorna todos los usuarios (200)
[GET] https://localhost:3001/users/:id      --> Retorna el usuario por ID (200)

[POST] https://localhost:3001/users         --> Retorna el usuario creado (201)

[DELETE] https://localhost:3001/users/:id   --> Retorna status de usuario borrado (200)
