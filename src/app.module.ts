import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandModule } from './brand/brand.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryTagsModule } from './category-tags/category-tags.module';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductModule,
    BrandModule,
    CategoryTagsModule,
    CategoryModule,
    ImageModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
