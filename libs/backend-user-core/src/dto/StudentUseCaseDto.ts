import { BaseUseCaseDto, ID } from '@svconnect/backend-common-core';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class StudentUseCaseDto extends BaseUseCaseDto {
  @Expose()
  @Type(() => ID)
  projectIds: ID[];
}
