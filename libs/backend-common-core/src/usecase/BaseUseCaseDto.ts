import { Expose, Type } from 'class-transformer';

import { ID } from '../value-object/id/ID';

export class BaseUseCaseDto {
  @Expose()
  @Type(() => ID)
  id: ID;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
