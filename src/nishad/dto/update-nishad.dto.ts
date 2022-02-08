import { PartialType } from '@nestjs/mapped-types';
import { CreateNishadDto } from './create-nishad.dto';

export class UpdateNishadDto extends PartialType(CreateNishadDto) {}
