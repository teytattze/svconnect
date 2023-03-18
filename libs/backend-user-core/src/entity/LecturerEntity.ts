import {
  BaseEntity,
  BaseEntityPayload,
  ID,
} from '@svconnect/backend-common-core';

type LecturerEntityPayload = BaseEntityPayload & {
  specialityIds?: ID[];
  supervisingProjectIds?: ID[];
};

export class LecturerEntity extends BaseEntity {
  private readonly _specialityIds: ID[];
  private readonly _supervisingProjectIds: ID[];

  constructor({
    specialityIds,
    supervisingProjectIds,
    ...baseEntityPayload
  }: LecturerEntityPayload = {}) {
    super(baseEntityPayload);

    this._specialityIds = specialityIds ?? [];
    this._supervisingProjectIds = supervisingProjectIds ?? [];
  }

  get specialityIds(): ID[] {
    return this._specialityIds;
  }

  get supervisingProjectIds(): ID[] {
    return this._supervisingProjectIds;
  }
}
