import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ColorsController } from './colors.controller';
import { Color } from './colors.entity';
import { ColorsService } from './colors.service';

@Module({
  imports: [MikroOrmModule.forFeature([Color])],
  controllers: [ColorsController],
  providers: [ColorsService],
})
export class ColorsModule {}
