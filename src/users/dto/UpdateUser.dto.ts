import { MaxLength } from "class-validator"

export class UpdateUserDto {
    name: string

    @MaxLength(255)
    surname: string
}