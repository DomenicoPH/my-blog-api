## NestJS
- [NestJS Docs - First Steps](https://docs.nestjs.com/first-steps)
- [NestJS Docs - Exception Filters](https://docs.nestjs.com/exception-filters)
- [NestJS Docs - Validation](https://docs.nestjs.com/techniques/validation)

## Comandos de inicio

    npm i -g @nestjs/cli        // Instala NestJS CLI
    nest new project-name       // Crea nuevo proyecto

    cd my-blog-api                  // Ir ala carpeta del proyecto
    npm run start                   // Inicia app
    npm run start:dev               // Inicia app en dev

    export PORT=4001
    npm run start:dev --port 4001   // Inicia app en dev en port 4001

## Generator

    nest g controller users
    nest g service users

---

# -- NOTES --

[GET] https://localhost:3001/users          --> Retorna todos los usuarios (200)
[GET] https://localhost:3001/users/:id      --> Retorna el usuario por ID (200)

[POST] https://localhost:3001/users         --> Retorna el usuario creado (201)

[DELETE] https://localhost:3001/users/:id   --> Retorna status de usuario borrado (200)

[PUT] https://localhost:3001/users/:id      --> Retorna el usuario actualizado (200)

## Exception Filters

- **400** - BadRequestException
- **401** - UnauthorizedException
- **404** - NotFoundException
- **403** - ForbiddenException
- **406** - NotAcceptableException
- **408** - RequestTimeoutException
- **409** - ConflictException
- **410** - GoneException
- **505** - HttpVersionNotSupportedException
- **413** - PayloadTooLargeException
- **415** - UnsupportedMediaTypeException
- **422** - UnprocessableEntityException
- **500** - InternalServerErrorException
- **501** - NotImplementedException
- **418** - ImATeapotException
- **405** - MethodNotAllowedException
- **502** - BadGatewayException
- **503** - ServiceUnavailableException
- **504** - GatewayTimeoutException
- **512** - PreconditionFailedException

## Enlaces
[Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
