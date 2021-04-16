import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Color } from 'src/colors/colors.entity';
import { ColorsService } from 'src/colors/colors.service';
import { Personality } from 'src/personalities/personalities.entity';
import { PersonalitiesService } from 'src/personalities/personalities.service';
import { Species } from 'src/species/species.entity';
import { SpeciesService } from 'src/species/species.service';
import { StylesService } from 'src/styles/styles.service';
import { Style } from 'src/styles/stylies.entity';
import { VillagersController } from './villagers.controller';
import { Villager } from './villagers.entity';
import { VillagersService } from './villagers.service';

@Module({
  imports: [
    MikroOrmModule.forFeature([Villager, Color, Personality, Species, Style]),
  ],
  controllers: [VillagersController],
  providers: [
    VillagersService,
    ColorsService,
    StylesService,
    PersonalitiesService,
    SpeciesService,
  ],
})
export class VillagersModule {}
