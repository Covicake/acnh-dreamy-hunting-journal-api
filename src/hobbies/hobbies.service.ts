import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Hobby } from './hobbies.entity';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectRepository(Hobby)
    private readonly hobbiesRepository: EntityRepository<Hobby>,
  ) {}

  async getHobbiesList() {
    const hobbies = await this.hobbiesRepository.findAll();
    return hobbies;
  }

  async getSingleHobby(id: string) {
    const hobby = await this.hobbiesRepository.findOne(id);
    if (!hobby) {
      throw new NotFoundException(`Theres no hobby for id ${id}`);
    }
    return hobby;
  }

  async addHobby(name: string, translation: string) {
    const hobby = new Hobby(name, translation);
    this.hobbiesRepository.persistAndFlush(hobby);

    return hobby;
  }
}
