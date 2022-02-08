import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { stringify } from 'querystring';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { BrandDto } from './dto/brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  create(brandDto: BrandDto): Promise<Brand> {
    //return this.brandRepository.insert(brandDto);
    return this.brandRepository.save(this.brandRepository.create(brandDto));
  }

  async readAll(): Promise<Brand[]> {
    return await this.brandRepository.find();
  }

  readOne(id: number): Promise<Brand> {
    //return this.brandRepository.findOne(id);
    return this.brandRepository.findOneOrFail(id);
  }

  async update(id: number, brandDto: BrandDto): Promise<Brand> {
    try {
      const brand = await this.brandRepository.findOne(id);
      if (!brand) {
        throw 'This brand does not exist.';
      }
      return await this.brandRepository.save({ ...brand, ...brandDto });
    } catch (e) {
      return e;
    }

    //return await this.brandRepository.update(id, brandDto);
    //return this.brandRepository.findOne(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    try {
      const brandToDelete = await this.brandRepository.findOne(id);
      if (!brandToDelete) {
        throw "This brand cannot be deleted cause it doesn't exist.";
      }
      return await this.brandRepository.delete({ ...brandToDelete });
    } catch (e) {
      return e;
    }
  }
}
