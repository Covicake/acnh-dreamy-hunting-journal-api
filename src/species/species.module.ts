import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { SpeciesController } from './species.controller';
import { Species } from './species.entity';
import { SpeciesService } from './species.service';

@Module({
  imports: [MikroOrmModule.forFeature([Species])],
  controllers: [SpeciesController],
  providers: [SpeciesService],
})
export class SpeciesModule {}
