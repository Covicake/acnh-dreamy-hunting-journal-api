import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PersonalitiesService } from './personalities.service';
import { AddPersonalityDto } from './dto/AddPersonality.dto';

@Controller('personalities')
export class PersonalitiesController {
  constructor(private readonly personalitiesService: PersonalitiesService) {}

  @Get()
  getPersonalities() {
    return this.personalitiesService.getPersonalities();
  }

  @Get(':id')
  getPersonality(@Param('id') id) {
    return this.personalitiesService.getPersonality(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addPersonality(@Body() payload: AddPersonalityDto) {
    return this.personalitiesService.addPersonality(
      payload.name,
      payload.translation,
    );
  }
}
