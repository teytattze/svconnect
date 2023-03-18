import { Optional } from './type';

export interface ExceptionPayload<T = unknown> {
  statusCode: number;
  errorCode?: string;
  data?: T;
  message?: string;
}

export class Exception<T = unknown> extends Error {
  private readonly _statusCode: number;
  private readonly _errorCode?: string;
  private readonly _data?: T;

  static new<T = unknown>(payload: ExceptionPayload<T>): Exception<T> {
    return new Exception(payload);
  }

  constructor({ statusCode, errorCode, data, message }: ExceptionPayload<T>) {
    super(message);

    this._statusCode = statusCode;
    this._errorCode = errorCode;
    this._data = data;
  }

  get statusCode(): number {
    return this._statusCode;
  }

  get errorCode(): Optional<string> {
    return this._errorCode;
  }

  get data(): Optional<T> {
    return this._data;
  }
}
