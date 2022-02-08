import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandModule } from './brand/brand.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryTagsModule } from './category-tags/category-tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductModule,
    BrandModule,
    CategoryTagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
