import { ID } from './value-object/id/ID';
import { IDFactory } from './value-object/id/IDFactory';
import { IDType } from './value-object/id/IDType';

export type BaseEntityPayload = {
  id?: ID;
  createdAt?: Date;
  updatedAt?: Date;
};

export abstract class BaseEntity {
  protected readonly _id: ID;
  protected readonly _createdAt: Date;

  constructor(payload: BaseEntityPayload) {
    this._id = payload.id || IDFactory.create({ type: IDType.UUID });
    this._createdAt = payload.createdAt || new Date();
    this._updatedAt = payload.updatedAt || new Date();
  }

  protected _updatedAt: Date;

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    this._updatedAt = updatedAt;
  }

  get id(): ID {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}
