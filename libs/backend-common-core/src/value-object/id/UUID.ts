import { v4 } from 'uuid';

import { ID } from './ID';
import { IDType } from './IDType';

export class UUID extends ID {
  constructor(value?: string) {
    super(value ?? v4(), IDType.UUID);
  }
}
