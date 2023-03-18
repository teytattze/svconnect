import { BaseUseCaseDto, Nullable } from '@svconnect/backend-common-core';
import { Exclude, Expose, Type, plainToClass } from 'class-transformer';

import { UserEntity } from '../entity/UserEntity';
import { AdminUseCaseDto } from './AdminUseCaseDto';
import { LecturerUseCaseDto } from './LecturerUseCaseDto';
import { StudentUseCaseDto } from './StudentUseCaseDto';

@Exclude()
export class UserUseCaseDto extends BaseUseCaseDto {
  @Expose()
  firstName: string;
  @Expose()
  lastName: string;
  @Expose()
  email: string;
  @Exclude()
  password: string;
  @Expose()
  role: string;
  @Expose()
  @Type(() => AdminUseCaseDto)
  admin: Nullable<AdminUseCaseDto>;
  @Expose()
  @Type(() => LecturerUseCaseDto)
  lecturer: Nullable<LecturerUseCaseDto>;
  @Expose()
  @Type(() => StudentUseCaseDto)
  student: Nullable<StudentUseCaseDto>;

  static fromEntity(entity: UserEntity): UserUseCaseDto {
    return plainToClass(UserUseCaseDto, entity);
  }

  static fromEntities(entities: UserEntity[]): UserUseCaseDto[] {
    return entities.map((entity) => UserUseCaseDto.fromEntity(entity));
  }
}
