# Postgres node application

## About

### Packages and libs in use

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- [TypeOrm](https://typeorm.io/#/) orm for entity mapping.
- [class-validator](https://github.com/typestack/class-validator) for dto validation.
- [class-transformer](https://github.com/typestack/class-transformer) for dto and entity serialization.
- [Docker](https://www.docker.com/) for container administration and fast setup with postgres and nodejs application.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod

# Using docker
$ docker-compose up
```
## Documentation

Access [swagger api documentation route](http://localhost:3000/api) (execute application first).
