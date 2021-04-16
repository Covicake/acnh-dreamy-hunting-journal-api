import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import {v4} from 'uuid'

@Entity()
export class User {
    @PrimaryKey()
    uuid: string

    @Property()
    name: string

    @Property()
    surname: string

    @Property({nullable: true})
    avatar: string

    constructor(name: string, surname: string, avatar?: string) {
        this.uuid = v4()
        this.name = name,
        this.surname = surname
        this.avatar = avatar
    }
}