import { IsEnum, IsNotEmpty, MaxLength } from 'class-validator';

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export class AddVillagerDto {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @MaxLength(255)
  translation: string;

  @IsNotEmpty()
  @MaxLength(255)
  star_sign: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  personality_id: string;

  @IsNotEmpty()
  species_id: string;

  @IsNotEmpty()
  style_ids: string[];

  @IsNotEmpty()
  color_ids: string[];
}
