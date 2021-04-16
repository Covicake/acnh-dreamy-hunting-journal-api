import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Species } from './species.entity';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species)
    private readonly speciesRepository: EntityRepository<Species>,
  ) {}

  async getSpeciesList() {
    const species = await this.speciesRepository.findAll();
    return species;
  }

  async getSingleSpecies(id: string) {
    const species = await this.speciesRepository.findOne(id);
    if (!species) {
      throw new NotFoundException(`Theres no species for id ${id}`);
    }
    return species;
  }

  async addSpecies(name: string, translation: string) {
    const species = new Species(name, translation);
    this.speciesRepository.persistAndFlush(species);

    return species;
  }
}
