import { Injectable } from '@nestjs/common';
import { CreateNishadDto } from './dto/create-nishad.dto';
import { UpdateNishadDto } from './dto/update-nishad.dto';

@Injectable()
export class NishadService {
  create(createNishadDto: CreateNishadDto) {
    return 'This action adds a new nishad';
  }

  findAll() {
    return `This action returns all nishad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nishad`;
  }

  update(id: number, updateNishadDto: UpdateNishadDto) {
    return `This action updates a #${id} nishad`;
  }

  remove(id: number) {
    return `This action removes a #${id} nishad`;
  }
}
