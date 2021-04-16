import { IsNotEmpty } from 'class-validator';

export class AddSpeciesDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  translation: string;
}
