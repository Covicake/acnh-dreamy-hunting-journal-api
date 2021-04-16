import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Personality } from './personalities.entity';

@Injectable()
export class PersonalitiesService {
  constructor(
    @InjectRepository(Personality)
    private readonly personalitiesRepository: EntityRepository<Personality>,
  ) {}

  async getPersonalities() {
    const personalities = await this.personalitiesRepository.findAll();
    return personalities;
  }

  async getPersonality(id: string) {
    const personality = await this.personalitiesRepository.findOne(id);
    if (!personality) {
      throw new NotFoundException(`Theres no personality for id ${id}`);
    }
    return personality;
  }

  async addPersonality(name: string, translation: string) {
    const personality = new Personality(name, translation);
    this.personalitiesRepository.persistAndFlush(personality);

    return personality;
  }
}
