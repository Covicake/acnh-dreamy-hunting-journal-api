import { IsNotEmpty } from 'class-validator';

export class AddStyleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  translation: string;
}
