import { IsNotEmpty } from 'class-validator';

export class AddPersonalityDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  translation: string;
}
