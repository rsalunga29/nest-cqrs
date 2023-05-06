import { ICommand } from '@nestjs/cqrs';
import { SavePersonDto } from 'src/person/dto/save-person.dto';

export class SavePersonCommand implements ICommand {
  constructor(public readonly dto: SavePersonDto) {}
}
