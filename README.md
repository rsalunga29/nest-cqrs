# NestJS CQRS with TypeORM

This repo contains the results of tutorial I followed to implement CQRS Design Pattern and usage of TypeORM.

TypeORM Tutorial: https://www.youtube.com/watch?v=5G81_VIjaO8
TypeORM Relations Tutorial: https://www.youtube.com/watch?v=rKgZLVgdvAY
CQRS Tutorial #1: https://www.learmoreseekmore.com/2021/10/nestjs-application-using-cqrs-design-pattern.html
CQRS Tutorial #2: https://itnext.io/cqrs-pattern-nestjs-node-js-cf20fd9bb07
CQRS Tutorial #3: https://github.com/MatiasDelorenzi/nestjs-users-crud-auth-cqrs

Read more about CQRS at [martinfowler.com](https://martinfowler.com/bliki/CQRS.html) and [eventstore.com](https://www.eventstore.com/cqrs-pattern)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Running Migrations

```bash
# run migrations
$ npm run migration:run
```

```bash
# generate migrations
$ npm run migration:generate -- db/migrations/NameOfMigrationFile
```
