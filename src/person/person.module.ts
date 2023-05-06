import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entities/person/person';
import { PersonController } from './person.controller';
import { GetPersonsHandler } from './queries/handlers/get-persons.handler';
import { SavePersonHandler } from './commands/handlers/save-person.handler';
import { UpdatePersonHandler } from './commands/handlers/update-person.handler';
import { DeletePersonHandler } from './commands/handlers/delete-person.handler';
import { GetPersonHandler } from './queries/handlers/get-person.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Person]), CqrsModule],
  controllers: [PersonController],
  providers: [
    GetPersonsHandler,
    GetPersonHandler,
    SavePersonHandler,
    UpdatePersonHandler,
    DeletePersonHandler,
  ],
})
export class PersonModule {}
