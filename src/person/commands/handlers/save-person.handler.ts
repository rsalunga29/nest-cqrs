import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from 'src/entities/person/person';
import { SavePersonCommand } from '../impl/save-person.command';

@CommandHandler(SavePersonCommand)
export class SavePersonHandler implements ICommandHandler<SavePersonCommand> {
  constructor(
    @InjectRepository(Person) private repository: Repository<Person>,
  ) {}

  async execute(command: SavePersonCommand) {
    const person = new Person();

    person.name = command.dto.name;
    person.age = command.dto.age;

    await this.repository.insert(person);
  }
}
