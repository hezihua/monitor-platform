import { PartialType } from '@nestjs/mapped-types';
import { CreateErrorInfoDto } from './create-error-info.dto';

export class UpdateErrorInfoDto extends PartialType(CreateErrorInfoDto) {}
