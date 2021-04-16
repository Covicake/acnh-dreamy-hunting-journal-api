import { IsNotEmpty } from 'class-validator';

export class AddColorDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  hex: string;
}
