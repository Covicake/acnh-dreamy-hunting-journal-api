import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ColorsService } from './colors.service';
import { AddColorDto } from './dto/AddColor.dto';

@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @Get()
  getColors() {
    return this.colorsService.getColors();
  }

  @Get(':id')
  getColor(@Param('id') id) {
    return this.colorsService.getColor(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addColor(@Body() payload: AddColorDto) {
    return this.colorsService.addColor(payload.name, payload.hex);
  }
}
