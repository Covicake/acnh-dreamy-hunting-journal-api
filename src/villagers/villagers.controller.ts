import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddVillagerDto } from './dto/AddVillager.dto';
import { VillagersService } from './villagers.service';

@Controller('villagers')
export class VillagersController {
  constructor(private readonly villagersService: VillagersService) {}

  @Get()
  getVillagers(
    @Query('offset', ParseIntPipe) offset: number,
    @Query('limit', ParseIntPipe) limit: number,
  ) {
    return this.villagersService.getVillagers(offset, limit);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addVillager(@Body() payload: AddVillagerDto) {
    return this.villagersService.addVillager(payload);
  }
}
