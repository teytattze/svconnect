import {
  BaseEntity,
  BaseEntityPayload,
  ID,
} from '@svconnect/backend-common-core';

import { SpecialityType } from '../enum/SpecialityType';

type SpecialityEntityPayload = BaseEntityPayload & {
  name: string;
  type: SpecialityType;

  projectIds: ID[];
  lecturerIds: ID[];
};

export class SpecialityEntity extends BaseEntity {
  private readonly _name: string;
  private readonly _type: SpecialityType;

  private readonly _projectIds: ID[];
  private readonly _lecturerIds: ID[];

  constructor({
    name,
    type,
    projectIds,
    lecturerIds,
    ...baseEntityPayload
  }: SpecialityEntityPayload) {
    super(baseEntityPayload);

    this._name = name;
    this._type = type;
    this._projectIds = projectIds;
    this._lecturerIds = lecturerIds;
  }
}
