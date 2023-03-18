import { MYRCurrencyMoney } from './MYRCurrencyMoney';
import { Money } from './Money';
import { CurrencyCode } from './type';

export type CreateMoneyPayload = {
  value?: number;
  currencyCode: CurrencyCode;
};

export class MoneyFactory {
  static create({ value, currencyCode }: CreateMoneyPayload): Money {
    switch (currencyCode) {
      case 'MYR':
        return new MYRCurrencyMoney(value);
      default:
        throw new Error(`Currency code ${currencyCode} is not supported`);
    }
  }
}
