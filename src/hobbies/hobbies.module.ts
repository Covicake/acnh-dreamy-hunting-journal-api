import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { HobbiesController } from './hobbies.controller';
import { Hobby } from './hobbies.entity';
import { HobbiesService } from './hobbies.service';

@Module({
  imports: [MikroOrmModule.forFeature([Hobby])],
  controllers: [HobbiesController],
  providers: [HobbiesService],
})
export class HobbiesModule {}
