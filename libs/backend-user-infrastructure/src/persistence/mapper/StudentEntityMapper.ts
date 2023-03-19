import { IDFactory, IDType } from '@svconnect/backend-common-core';
import { StudentEntity } from '@svconnect/backend-user-core';

import { TypeOrmStudentEntity } from '../entity/TypeOrmStudentEntity';

export class StudentEntityMapper {
  static toTypeOrmEntity(domainEntity: StudentEntity): TypeOrmStudentEntity {
    const typeOrmEntity = new TypeOrmStudentEntity();

    typeOrmEntity.id = domainEntity.id.value;
    typeOrmEntity.projectIds = domainEntity.projectIds.map((id) => id.value);
    typeOrmEntity.createdAt = domainEntity.createdAt;
    typeOrmEntity.updatedAt = domainEntity.updatedAt;

    return typeOrmEntity;
  }

  static toDomainEntity(typeOrmEntity: TypeOrmStudentEntity): StudentEntity {
    return new StudentEntity({
      id: IDFactory.create({ type: IDType.UUID, value: typeOrmEntity.id }),
      projectIds: typeOrmEntity.projectIds.map((id) =>
        IDFactory.create({ type: IDType.UUID, value: id }),
      ),
      createdAt: typeOrmEntity.createdAt,
      updatedAt: typeOrmEntity.updatedAt,
    });
  }
}
