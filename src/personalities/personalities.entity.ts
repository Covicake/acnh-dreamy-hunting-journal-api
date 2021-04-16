import { Collection, Entity, OneToMany, PrimaryKey, Property } from 'mikro-orm';
import { Villager } from '../villagers/villagers.entity';
import { v4 } from 'uuid';

@Entity()
export class Personality {
  @PrimaryKey()
  id: string;

  @Property()
  name: string;

  @Property()
  translation: string;

  @OneToMany(() => Villager, 'personality')
  villagers = new Collection<Villager>(this);

  constructor(name: string, translation: string) {
    this.name = name;
    this.translation = translation;
    this.id = v4();
  }
}
