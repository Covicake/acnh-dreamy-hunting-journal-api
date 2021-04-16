import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StylesService } from './styles.service';
import { AddStyleDto } from './dto/AddStyle.dto';

@Controller('styles')
export class StylesController {
  constructor(private readonly stylesService: StylesService) {}

  @Get()
  getStyles() {
    return this.stylesService.getStyles();
  }

  @Get(':id')
  getStyle(@Param('id') id) {
    return this.stylesService.getStyle(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addStyle(@Body() payload: AddStyleDto) {
    return this.stylesService.addStyle(payload.name, payload.translation);
  }
}
