import { Money } from './Money';

export class MYRCurrencyMoney extends Money {
  constructor(value?: number) {
    super(value ?? 0, 'MYR', 'RM');
  }
}
