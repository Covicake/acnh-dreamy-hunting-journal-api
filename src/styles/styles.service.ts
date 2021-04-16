import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Style } from './stylies.entity';

@Injectable()
export class StylesService {
  constructor(
    @InjectRepository(Style)
    private readonly stylesRepository: EntityRepository<Style>,
  ) {}

  async getStyles() {
    const styles = await this.stylesRepository.findAll();
    return styles;
  }

  async getStyle(id: string) {
    const style = await this.stylesRepository.findOne(id);
    if (!style) {
      throw new NotFoundException(`Theres no style for id ${id}`);
    }
    return style;
  }

  async findStyles(ids: string[]) {
    const styles = await this.stylesRepository.find({ id: { $in: ids } });
    if (!styles || styles.length < ids.length) {
      throw new NotFoundException(
        'Some of the styles specified were not valid',
      );
    }

    return styles;
  }

  async addStyle(name: string, translation: string) {
    const style = new Style(name, translation);
    this.stylesRepository.persistAndFlush(style);

    return style;
  }
}
