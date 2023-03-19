import { IDFactory, IDType, isNotNull } from '@svconnect/backend-common-core';
import { UserEntity } from '@svconnect/backend-user-core';

import { TypeOrmUserEntity } from '../entity/TypeOrmUserEntity';
import { LecturerEntityMapper } from './LecturerEntityMapper';
import { StudentEntityMapper } from './StudentEntityMapper';

export class UserEntityMapper {
  static toTypeOrmEntity(domainEntity: UserEntity): TypeOrmUserEntity {
    const typeOrmEntity = new TypeOrmUserEntity();

    typeOrmEntity.id = domainEntity.id.value;
    typeOrmEntity.firstName = domainEntity.firstName;
    typeOrmEntity.lastName = domainEntity.lastName;
    typeOrmEntity.email = domainEntity.email;
    typeOrmEntity.emailVerified = domainEntity.emailVerified;
    typeOrmEntity.password = domainEntity.password;
    typeOrmEntity.roles = domainEntity.roles;
    typeOrmEntity.lecturer = isNotNull(domainEntity.lecturer)
      ? LecturerEntityMapper.toTypeOrmEntity(domainEntity.lecturer)
      : null;
    typeOrmEntity.student = isNotNull(domainEntity.student)
      ? StudentEntityMapper.toTypeOrmEntity(domainEntity.student)
      : null;
    typeOrmEntity.createdAt = domainEntity.createdAt;
    typeOrmEntity.updatedAt = domainEntity.updatedAt;

    return typeOrmEntity;
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
      lecturer: isNotNull(typeOrmEntity.lecturer)
        ? LecturerEntityMapper.toDomainEntity(typeOrmEntity.lecturer)
        : null,
      student: isNotNull(typeOrmEntity.student)
        ? StudentEntityMapper.toDomainEntity(typeOrmEntity.student)
        : null,
      createdAt: typeOrmEntity.createdAt,
      updatedAt: typeOrmEntity.updatedAt,
    });
  }
}
