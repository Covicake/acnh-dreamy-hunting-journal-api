import { Entity, PrimaryKey, Property } from 'mikro-orm';
import { v4 } from 'uuid';

@Entity()
export class Species {
  @PrimaryKey()
  id: string;

  @Property()
  name: string;

  @Property()
  translation: string;

  constructor(name: string, translation: string) {
    this.name = name;
    this.translation = translation;
    this.id = v4();
  }
}
