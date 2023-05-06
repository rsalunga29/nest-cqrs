import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Person } from 'src/entities/person/person';
import { DeletePersonCommand } from '../impl/delete-person.command';

@CommandHandler(DeletePersonCommand)
export class DeletePersonHandler
  implements ICommandHandler<DeletePersonCommand>
{
  constructor(
    @InjectRepository(Person) private repository: Repository<Person>,
  ) {}

  async execute(command: DeletePersonCommand): Promise<DeleteResult> {
    const user = await this.repository.findOneBy({
      id: command.id,
    });

    if (!user) {
      throw new NotFoundException('User does not exist!');
    }

    return await this.repository.delete(user.id);
  }
}
