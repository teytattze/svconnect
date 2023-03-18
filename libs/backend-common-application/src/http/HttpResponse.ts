export type HttpResponsePayload<T> = {
  statusCode: number;
  errorCode?: string;
  message?: string;
  data?: T;
};

export class HttpResponse<T = unknown> {
  private readonly _statusCode: number;
  private readonly _errorCode?: string;
  private readonly _message?: string;
  private readonly _data?: T;
  private readonly _timestamp: number;

  static success<T = unknown>({
    data,
    message,
    statusCode,
  }: Partial<HttpResponsePayload<T>> = {}): HttpResponse<T> {
    return new HttpResponse({
      statusCode: statusCode ?? 200,
      message: message ?? 'Ok',
      data,
    });
  }

  static error<T = unknown>({
    data,
    message,
    statusCode,
    errorCode,
  }: Partial<HttpResponsePayload<T>> = {}): HttpResponse<T> {
    return new HttpResponse({
      statusCode: statusCode ?? 500,
      errorCode,
      message: message ?? 'Internal server error',
      data,
    });
  }

  constructor({
    data,
    message,
    statusCode,
    errorCode,
  }: HttpResponsePayload<T>) {
    this._statusCode = statusCode ?? null;
    this._errorCode = errorCode;
    this._data = data;
    this._message = message ?? null;
    this._timestamp = Date.now();
  }

  get statusCode(): number {
    return this._statusCode;
  }

  get errorCode(): string {
    return this._errorCode;
  }

  get message(): string {
    return this._message;
  }

  get data(): T {
    return this._data;
  }

  get timestamp(): number {
    return this._timestamp;
  }
}
