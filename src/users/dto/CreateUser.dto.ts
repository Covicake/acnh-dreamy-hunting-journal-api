import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  nickName: string;
}
