import {
  BaseEntity,
  BaseEntityPayload,
  ID,
} from '@svconnect/backend-common-core';

type StudentEntityPayload = BaseEntityPayload & {
  projectIds?: ID[];
};

export class StudentEntity extends BaseEntity {
  private readonly _projectIds: ID[];

  constructor({ projectIds, ...baseEntityPayload }: StudentEntityPayload = {}) {
    super(baseEntityPayload);
    this._projectIds = projectIds ?? [];
  }

  get projectIds(): ID[] {
    return this._projectIds;
  }
}
