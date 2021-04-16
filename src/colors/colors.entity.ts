import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from 'mikro-orm';
import { Villager } from '../villagers/villagers.entity';
import { v4 } from 'uuid';

@Entity()
export class Color {
  @PrimaryKey()
  id: string;

  @Property()
  name: string;

  @Property()
  hex: string;

  @ManyToMany({ entity: () => Villager, mappedBy: 'colors' })
  villagers = new Collection<Villager>(this);

  constructor(name: string, hex: string) {
    this.name = name;
    this.hex = hex;
    this.id = v4();
  }
}
