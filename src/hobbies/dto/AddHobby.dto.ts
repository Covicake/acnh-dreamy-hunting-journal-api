import { IsNotEmpty } from 'class-validator';

export class AddHobbyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  translation: string;
}
