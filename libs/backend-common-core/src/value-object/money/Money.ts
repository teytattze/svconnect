import { CurrencyCode, CurrencySymbol } from './type';

export abstract class Money {
  protected readonly _value: number;
  protected readonly _currencyCode: CurrencyCode;
  protected readonly _currencySymbol: CurrencySymbol;

  protected constructor(
    value: number,
    currencyCode: CurrencyCode,
    currencySymbol: CurrencySymbol,
  ) {
    this._value = value;
    this._currencyCode = currencyCode;
    this._currencySymbol = currencySymbol;
  }

  get value(): number {
    return this._value;
  }

  get currencyCode(): CurrencyCode {
    return this._currencyCode;
  }

  get currencySymbol(): CurrencySymbol {
    return this._currencySymbol;
  }
}

// export interface NewMoneyPayload {
//   value: number;
//   currencyCode: CurrencyCode;
//   currencySymbol: CurrencySymbol;
//   currencyExponent: number;
// }

// export class Money {
//   private readonly _value: number;
//   private readonly _currencyCode: CurrencyCode;
//   private readonly _currencySymbol: CurrencySymbol;
//   private readonly _currencyExponent: number;
//
//   static new(payload: NewMoneyPayload): Money {
//     return new Money(payload);
//   }
//
//   constructor({
//     value,
//     currencyCode,
//     currencySymbol,
//     currencyExponent,
//   }: NewMoneyPayload) {
//     this._value = value;
//     this._currencyCode = currencyCode;
//     this._currencySymbol = currencySymbol;
//     this._currencyExponent = currencyExponent;
//   }
// }
