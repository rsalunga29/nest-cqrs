import { IQuery } from '@nestjs/cqrs';

export class GetPersonQuery implements IQuery {
  constructor(public readonly id: number) {}
}
