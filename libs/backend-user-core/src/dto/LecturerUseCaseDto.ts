import { BaseUseCaseDto, ID } from '@svconnect/backend-common-core';
import {
  Exclude,
  Expose,
  Transform,
  Type,
  plainToClass,
} from 'class-transformer';
import 'reflect-metadata';

import { LecturerEntity } from '../entity/LecturerEntity';

@Exclude()
export class LecturerUseCaseDto extends BaseUseCaseDto {
  @Expose()
  @Type(() => ID)
  @Transform(({ value: ids }) => ids.map((id) => id.value))
  specialityIds: string[];
  @Expose()
  @Type(() => ID)
  @Transform(({ value: ids }) => ids.map((id) => id.value))
  supervisingProjectIds: string[];

  static fromEntity(entity: LecturerEntity): LecturerUseCaseDto {
    return plainToClass(LecturerUseCaseDto, entity);
  }
}
