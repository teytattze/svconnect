import { BaseUseCaseDto, ID } from '@svconnect/backend-common-core';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class LecturerUseCaseDto extends BaseUseCaseDto {
  @Expose()
  @Type(() => ID)
  specialityIds: ID[];
  @Expose()
  @Type(() => ID)
  supervisingProjectIds: ID[];
}
