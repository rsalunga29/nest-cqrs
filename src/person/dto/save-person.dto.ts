import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class SavePersonDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNumber()
  readonly age: number;
}
