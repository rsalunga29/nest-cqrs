import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { GetPersonsQuery } from './queries/impl/get-persons.query';
import { GetPersonQuery } from './queries/impl/get-person.query';
import { SavePersonCommand } from './commands/impl/save-person.command';
import { UpdatePersonCommand } from './commands/impl/update-person.command';
import { UpdatePersonDto } from './dto/update-person.dto';
import { SavePersonDto } from './dto/save-person.dto';
import { DeletePersonCommand } from './commands/impl/delete-person.command';

@ApiTags('person')
@Controller('person')
export class PersonController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get('/')
  async getAllPersons() {
    return await this.queryBus.execute(new GetPersonsQuery());
  }

  @Get('/person/:id')
  async getPersonById(@Param('id') id: number) {
    return await this.queryBus.execute(new GetPersonQuery(id));
  }

  @Post('/create')
  async createPerson(@Body() savePersonDto: SavePersonDto) {
    return await this.commandBus.execute(new SavePersonCommand(savePersonDto));
  }

  @Patch('/update/:id')
  async updatePerson(
    @Param('id') id: number,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return await this.commandBus.execute(
      new UpdatePersonCommand(id, updatePersonDto),
    );
  }

  @Delete('/delete/:id')
  async deletePerson(@Param('id') id: number) {
    return await this.commandBus.execute(new DeletePersonCommand(id));
  }
}
