import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { BrandDto } from './dto/brand.dto';
import { BrandService } from './brand.service';
import { Brand } from './entities/brand.entity';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get(':id')
  readOneBrand(@Param('id') id: string): Promise<Brand> {
    return this.brandService.readOne(Number(id));
  }

  @Get()
  readAllBrand(): Promise<Brand[]> {
    return this.brandService.readAll();
  }

  @Post()
  createBrand(@Body() brandDto: BrandDto): Promise<Brand> {
    return this.brandService.create(brandDto);
  }

  @Patch(':id')
  updateBrand(
    @Param('id') id: number,
    @Body() brandDto: BrandDto,
  ): Promise<Brand> {
    return this.brandService.update(Number(id), brandDto);
  }

  @Delete(':id')
  async deleteBrand(@Param('id') id: string): Promise<DeleteResult> {
    return await this.brandService.delete(Number(id));
  }
}
