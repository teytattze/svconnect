import { IDFactory, IDType } from '@svconnect/backend-common-core';
import { UserEntity } from '@svconnect/backend-user-core';

import { TypeOrmUserEntity } from '../entity/TypeOrmUserEntity';
import { LecturerEntityMapper } from './LecturerEntityMapper';
import { StudentEntityMapper } from './StudentEntityMapper';

export class UserEntityMapper {
  static toTypeOrmEntity(domainEntity: UserEntity): TypeOrmUserEntity {
    return new TypeOrmUserEntity({
      id: domainEntity.id.value,
      firstName: domainEntity.firstName,
      lastName: domainEntity.lastName,
      email: domainEntity.email,
      emailVerified: domainEntity.emailVerified,
      password: domainEntity.password,
      roles: domainEntity.roles,
      lecturer: LecturerEntityMapper.toTypeOrmEntity(domainEntity.lecturer),
      student: StudentEntityMapper.toTypeOrmEntity(domainEntity.student),
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    });
  }

  static toDomainEntity(typeOrmEntity: TypeOrmUserEntity): UserEntity {
    return new UserEntity({
      id: IDFactory.create({ type: IDType.UUID, value: typeOrmEntity.id }),
      firstName: typeOrmEntity.firstName,
      lastName: typeOrmEntity.lastName,
      email: typeOrmEntity.email,
      emailVerified: typeOrmEntity.emailVerified,
      password: typeOrmEntity.password,
      roles: typeOrmEntity.roles,
      lecturer: LecturerEntityMapper.toDomainEntity(typeOrmEntity.lecturer),
      student: StudentEntityMapper.toDomainEntity(typeOrmEntity.student),
      createdAt: typeOrmEntity.createdAt,
      updatedAt: typeOrmEntity.updatedAt,
    });
  }
}
