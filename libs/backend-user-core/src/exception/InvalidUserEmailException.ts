import { Exception } from '@svconnect/backend-common-core';

export class InvalidUserEmailException extends Exception {
  constructor() {
    super({
      statusCode: 401,
      errorCode: 'INVALID_USER_EMAIL',
      message: 'Invalid user email',
    });
  }
}
