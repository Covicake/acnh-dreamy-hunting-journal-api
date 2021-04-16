import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { AddHobbyDto } from './dto/AddHobby.dto';

@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbiesService: HobbiesService) {}

  @Get()
  getHobbies() {
    return this.hobbiesService.getHobbiesList();
  }

  @Get(':id')
  getHobby(@Param('id') id) {
    return this.hobbiesService.getSingleHobby(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addHobby(@Body() payload: AddHobbyDto) {
    return this.hobbiesService.addHobby(payload.name, payload.translation);
  }
}
