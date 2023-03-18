export type Nullish<T> = Optional<Nullable<T>>;

export type Nullable<T> = null | T;

export type Optional<T> = undefined | T;

export const isNullish = <T>(
  value: Optional<Nullable<T>>,
): value is null | undefined => isUndefined(value) || isNull(value);

export const isNull = <T>(value: Nullable<T>): value is null => value === null;

export const isUndefined = <T>(value: Optional<T>): value is undefined =>
  value === undefined;

export const isNotNullish = <T>(value: Optional<Nullable<T>>): value is T =>
  isNotUndefined(value) && isNotNull(value);

export const isNotNull = <T>(value: Nullable<T>): value is T => value !== null;

export const isNotUndefined = <T>(value: Optional<T>): value is T =>
  value !== undefined;
