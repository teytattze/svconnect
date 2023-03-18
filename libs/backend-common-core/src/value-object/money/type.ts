export const currencyCodes = ['MYR'] as const;
export type CurrencyCode = (typeof currencyCodes)[number];

export const currencySymbols = ['RM'] as const;
export type CurrencySymbol = (typeof currencySymbols)[number];
