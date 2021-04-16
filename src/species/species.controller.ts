import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SpeciesService } from './species.service';
import { AddSpeciesDto } from './dto/AddSpecies.dto';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get()
  getStyles() {
    return this.speciesService.getSpeciesList();
  }

  @Get(':id')
  getStyle(@Param('id') id) {
    return this.speciesService.getSingleSpecies(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addStyle(@Body() payload: AddSpeciesDto) {
    return this.speciesService.addSpecies(payload.name, payload.translation);
  }
}
