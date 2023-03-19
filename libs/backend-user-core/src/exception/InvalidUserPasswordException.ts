import { Exception } from '@svconnect/backend-common-core';

export class InvalidUserPasswordException extends Exception {
  constructor() {
    super({
      statusCode: 401,
      errorCode: 'INVALID_USER_PASSWORD',
      message: 'Invalid user password',
    });
  }
}
