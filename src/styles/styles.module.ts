import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { StylesController } from './styles.controller';
import { Style } from './stylies.entity';
import { StylesService } from './styles.service';

@Module({
  imports: [MikroOrmModule.forFeature([Style])],
  controllers: [StylesController],
  providers: [StylesService],
})
export class StylesModule {}
