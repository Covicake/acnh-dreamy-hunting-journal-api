import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { PersonalitiesController } from './personalities.controller';
import { Personality } from './personalities.entity';
import { PersonalitiesService } from './personalities.service';

@Module({
  imports: [MikroOrmModule.forFeature([Personality])],
  controllers: [PersonalitiesController],
  providers: [PersonalitiesService],
})
export class PersonalitiesModule {}
