import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Color } from './colors.entity';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private readonly colorsRepository: EntityRepository<Color>,
  ) {}

  async getColors() {
    const colors = await this.colorsRepository.findAll();
    return colors;
  }

  async getColor(id: string) {
    const color = await this.colorsRepository.findOne(id);
    if (!color) {
      throw new NotFoundException(`Theres no color for id ${id}`);
    }
    return color;
  }

  async findColors(ids: string[]) {
    const colors = await this.colorsRepository.find({ id: { $in: ids } });
    if (!colors || colors.length < ids.length) {
      throw new NotFoundException(
        'Some of the colors specified were not valid',
      );
    }

    return colors;
  }

  async addColor(name: string, hex: string) {
    const color = new Color(name, hex);
    this.colorsRepository.persistAndFlush(color);

    return color;
  }
}
