import {
  BaseEntity,
  BaseEntityPayload,
  ID,
} from '@svconnect/backend-common-core';

import { ProjectPhase } from '../enum/ProjectPhase';

type ProjectEntityPayload = BaseEntityPayload & {
  name: string;
  description: string;
  phase: ProjectPhase;

  specialityIds: ID[];
  studentIds: ID[];
  lecturerIds: ID[];
};

export class ProjectEntity extends BaseEntity {
  private readonly _name: string;
  private readonly _description: string;
  private readonly _phase: ProjectPhase;

  private readonly _specialityIds: ID[];
  private readonly _studentIds: ID[];
  private readonly _lecturerIds: ID[];

  constructor({
    name,
    description,
    phase,
    specialityIds,
    studentIds,
    lecturerIds,
    ...baseEntityPayload
  }: ProjectEntityPayload) {
    super(baseEntityPayload);

    this._name = name;
    this._description = description;
    this._phase = phase;
    this._specialityIds = specialityIds;
    this._studentIds = studentIds;
    this._lecturerIds = lecturerIds;
  }
}
