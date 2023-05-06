import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from 'src/entities/person/person';
import { GetPersonQuery } from '../impl/get-person.query';

@QueryHandler(GetPersonQuery)
export class GetPersonHandler implements IQueryHandler<GetPersonQuery> {
  constructor(
    @InjectRepository(Person) private repository: Repository<Person>,
  ) {}

  async execute(query: GetPersonQuery): Promise<Person> {
    return await this.repository.findOneBy({ id: query.id });
  }
}
