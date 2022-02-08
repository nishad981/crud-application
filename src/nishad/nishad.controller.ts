import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NishadService } from './nishad.service';
import { CreateNishadDto } from './dto/create-nishad.dto';
import { UpdateNishadDto } from './dto/update-nishad.dto';

@Controller('nishad')
export class NishadController {
  constructor(private readonly nishadService: NishadService) {}

  @Post()
  create(@Body() createNishadDto: CreateNishadDto) {
    return this.nishadService.create(createNishadDto);
  }

  @Get()
  findAll() {
    return this.nishadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nishadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNishadDto: UpdateNishadDto) {
    return this.nishadService.update(+id, updateNishadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nishadService.remove(+id);
  }
}
