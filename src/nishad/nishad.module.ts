import { Module } from '@nestjs/common';
import { NishadService } from './nishad.service';
import { NishadController } from './nishad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nishad } from './entities/nishad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nishad])],
  controllers: [NishadController],
  providers: [NishadService],
})
export class NishadModule {}
