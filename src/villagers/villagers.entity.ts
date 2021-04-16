import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryKey,
  Property,
} from 'mikro-orm';
import { Color } from '../colors/colors.entity';
import { Hobby } from 'src/hobbies/hobbies.entity';
import { Personality } from '../personalities/personalities.entity';
import { Style } from 'src/styles/stylies.entity';
import { Species } from '../species/species.entity';
import { v4 } from 'uuid';

@Entity()
export class Villager {
  @PrimaryKey()
  id: string;

  @Property({ length: 255 })
  name: string;

  @Property({ length: 255 })
  translation: string;

  @ManyToOne()
  personality: Personality;

  @ManyToOne()
  species: Species;

  @ManyToMany({ entity: () => Color, owner: true })
  colors = new Collection<Color>(this);

  @ManyToMany({
    entity: () => 'Hobby',
    owner: true,
  })
  hobbies = new Collection<Hobby>(this);

  @ManyToMany({
    entity: () => 'Style',
    owner: true,
  })
  styles = new Collection<Style>(this);

  constructor() {
    this.id = v4();
  }
}
