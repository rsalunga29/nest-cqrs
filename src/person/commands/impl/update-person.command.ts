import { ICommand } from '@nestjs/cqrs';
import { UpdatePersonDto } from 'src/person/dto/update-person.dto';

export class UpdatePersonCommand implements ICommand {
  constructor(
    public readonly id: number,
    public readonly dto: UpdatePersonDto,
  ) {}
}
