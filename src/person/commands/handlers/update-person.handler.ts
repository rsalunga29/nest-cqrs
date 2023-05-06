import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Person } from 'src/entities/person/person';
import { UpdatePersonCommand } from '../impl/update-person.command';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(UpdatePersonCommand)
export class UpdatePersonHandler
  implements ICommandHandler<UpdatePersonCommand>
{
  constructor(
    @InjectRepository(Person) private repository: Repository<Person>,
  ) {}

  async execute(command: UpdatePersonCommand): Promise<UpdateResult> {
    const user = await this.repository.findOneBy({
      id: command.id,
    });

    if (!user) {
      throw new NotFoundException('User does not exist!');
    }

    /**
     * Might want to consider just using the following:
     * ```
     * user.name = command.name
     * user.age = command.age
     *
     * return await this.repository.save(user)
     * ```
     * however, this reduces performance due to `repository.save()`
     * more information on: https://dev.to/rishit/optimizing-typeorm-tips-from-experience-part-1-dont-use-save-4ke9
     *
     * Caveat on using UpdateResult and repository.save() is this returns the following:
     * ```
     * {
     *    "generatedMaps": [],
     *    "raw": [],
     *    "affected": 1
     * }
     * ```
     * which doesn't help really, since its best to return new records after an update
     */
    return await this.repository.update(
      { id: command.id },
      { name: command.dto.name, age: command.dto.age },
    );
  }
}
