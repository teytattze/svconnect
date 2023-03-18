import { IDFactory, IDType } from '@svconnect/backend-common-core';
import { StudentEntity } from '@svconnect/backend-user-core';

import { TypeOrmStudentEntity } from '../entity/TypeOrmStudentEntity';

export class StudentEntityMapper {
  static toTypeOrmEntity(domainEntity: StudentEntity): TypeOrmStudentEntity {
    return new TypeOrmStudentEntity({
      id: domainEntity.id.value,
      projectIds: domainEntity.projectIds.map((id) => id.value),
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    });
  }

  static toDomainEntity(typeOrmEntity: TypeOrmStudentEntity): StudentEntity {
    return new StudentEntity({
      id: IDFactory.create({ type: IDType.UUID, value: typeOrmEntity.id }),
      projectIds: typeOrmEntity.projectIds.map((id) =>
        IDFactory.create({ type: IDType.UUID, value: typeOrmEntity.id }),
      ),
      createdAt: typeOrmEntity.createdAt,
      updatedAt: typeOrmEntity.updatedAt,
    });
  }
}
