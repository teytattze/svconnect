import { BaseUseCaseDto, ID } from '@svconnect/backend-common-core';
import {
  Exclude,
  Expose,
  Transform,
  Type,
  plainToClass,
} from 'class-transformer';

import { StudentEntity } from '../entity/StudentEntity';

@Exclude()
export class StudentUseCaseDto extends BaseUseCaseDto {
  @Expose()
  @Type(() => ID)
  @Transform(({ value: ids }) => ids.map((id) => id.value))
  projectIds: string[];

  static fromEntity(entity: StudentEntity): StudentUseCaseDto {
    return plainToClass(StudentUseCaseDto, entity);
  }
}
