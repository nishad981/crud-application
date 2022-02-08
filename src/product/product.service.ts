import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  createProduct(): Promise<Product> {
    return;
  }

  readProduct(): Promise<Product> {
    return;
  }

  updateProduct(): Promise<Product> {
    return;
  }

  deleteProduct(): Promise<Product> {
    return;
  }
}
