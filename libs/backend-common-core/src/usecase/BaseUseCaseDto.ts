import { Expose, Transform, Type } from 'class-transformer';
import 'reflect-metadata';

import { ID } from '../value-object/id/ID';

export class BaseUseCaseDto {
  @Expose()
  @Type(() => ID)
  @Transform(({ value: id }) => id.value)
  id: string;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
