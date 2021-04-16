import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from 'mikro-orm';
import { Villager } from 'src/villagers/villagers.entity';
import { v4 } from 'uuid';

@Entity()
export class Style {
  @PrimaryKey()
  id: string;

  @Property()
  name: string;

  @Property()
  translation: string;

  @ManyToMany({ entity: 'Villager', mappedBy: 'styles' })
  villager = new Collection<Villager>(this);

  constructor(name: string, translation: string) {
    this.name = name;
    this.translation = translation;
    this.id = v4();
  }
}
