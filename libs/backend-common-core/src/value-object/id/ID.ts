import { IDType } from './IDType';

export abstract class ID {
  protected readonly _value: string;
  protected readonly _type: IDType;

  protected constructor(value: string, type: IDType) {
    this._value = value;
    this._type = type;
  }

  get value(): string {
    return this._value;
  }

  get type(): IDType {
    return this._type;
  }
}
