import { EntityManager, EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { LoadStrategy } from 'mikro-orm';
import { ColorsService } from 'src/colors/colors.service';
import { PersonalitiesService } from 'src/personalities/personalities.service';
import { SpeciesService } from 'src/species/species.service';
import { StylesService } from 'src/styles/styles.service';
import { AddVillagerDto } from './dto/AddVillager.dto';
import { Villager } from './villagers.entity';

@Injectable()
export class VillagersService {
  constructor(
    @InjectRepository(Villager)
    private readonly villagersRepository: EntityRepository<Villager>,
    private readonly colorsService: ColorsService,
    private readonly stylesService: StylesService,
    private readonly personalitiesService: PersonalitiesService,
    private readonly speciesService: SpeciesService,
  ) {}

  async getVillagers(offset = 0, limit = 10, locale?: string) {
    const nameField = locale && locale === 'en_GB' ? 'name' : 'translation';
    const rawVillagers = await this.villagersRepository.find(undefined, {
      limit,
      offset,
      orderBy: { name: 'DESC' },
      populate: {
        personality: true,
        species: true,
        colors: true,
        styles: true,
      },
      fields: [
        '*',
        { styles: [nameField] },
        { personality: [nameField] },
        { species: [nameField] },
      ],
    });

    const villagers = rawVillagers.map((villager) => {
      const styles = villager.styles.getItems().map((style) => {
        return {
          id: style.id,
          name: style[nameField],
        };
      });

      return {
        ...villager,
        translation: undefined,
        name: villager[nameField],
        personality: {
          id: villager.personality.id,
          name: villager.personality[nameField],
        },
        species: {
          id: villager.species.id,
          name: villager.species[nameField],
        },
        styles,
      };
    });

    return villagers;
  }

  async addVillager(villagerData: AddVillagerDto) {
    const villager = new Villager();

    const personality = await this.personalitiesService.getPersonality(
      villagerData.personality_id,
    );
    const species = await this.speciesService.getSingleSpecies(
      villagerData.species_id,
    );

    villager.name = villagerData.name;
    villager.translation = villagerData.translation;
    villager.personality = personality;
    villager.species = species;

    const colors = await this.colorsService.findColors(villagerData.color_ids);
    villager.colors.set(colors);

    const styles = await this.stylesService.findStyles(villagerData.style_ids);
    villager.styles.set(styles);

    await this.villagersRepository.persistAndFlush(villager);

    return villagerData;
  }
}
