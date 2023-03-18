import { IDFactory, IDType } from '@svconnect/backend-common-core';
import { LecturerEntity } from '@svconnect/backend-user-core';

import { TypeOrmLecturerEntity } from '../entity/TypeOrmLecturerEntity';

export class LecturerEntityMapper {
  static toTypeOrmEntity(domainEntity: LecturerEntity): TypeOrmLecturerEntity {
    return new TypeOrmLecturerEntity({
      id: domainEntity.id.value,
      specialityIds: domainEntity.specialityIds.map((id) => id.value),
      supervisingProjectIds: domainEntity.supervisingProjectIds.map(
        (id) => id.value,
      ),
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    });
  }

  static toDomainEntity(typeOrmEntity: TypeOrmLecturerEntity): LecturerEntity {
    return new LecturerEntity({
      id: IDFactory.create({ type: IDType.UUID, value: typeOrmEntity.id }),
      specialityIds: typeOrmEntity.specialityIds.map((id) =>
        IDFactory.create({ type: IDType.UUID, value: id }),
      ),
      supervisingProjectIds: typeOrmEntity.supervisingProjectIds.map((id) =>
        IDFactory.create({ type: IDType.UUID, value: id }),
      ),
      createdAt: typeOrmEntity.createdAt,
      updatedAt: typeOrmEntity.updatedAt,
    });
  }
}
