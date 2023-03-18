import { ID } from './ID';
import { IDType } from './IDType';
import { UUID } from './UUID';

export type CreateIDPayload = {
  value?: string;
  type: IDType;
};

export class IDFactory {
  static create({ value, type }: CreateIDPayload): ID {
    switch (type) {
      case IDType.UUID:
        return new UUID(value);
      default:
        throw new Error('Invalid ID type');
    }
  }
}
