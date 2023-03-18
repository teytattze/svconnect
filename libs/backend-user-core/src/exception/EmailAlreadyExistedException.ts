import { Exception } from '@svconnect/backend-common-core';

export class EmailAlreadyExistedException extends Exception {
  constructor() {
    super({
      statusCode: 400,
      errorCode: 'EMAIL_ALREADY_EXISTED',
      message: 'Email already existed',
    });
  }
}
