export class DIToken {
  static readonly USER_REPOSITORY = Symbol('USER_REPOSITORY');

  static readonly CREATE_USER_USE_CASE = Symbol('CREATE_USER_USE_CASE');
  static readonly VALIDATE_USER_EMAIL_AND_PASSWORD_USE_CASE = Symbol(
    'VALIDATE_USER_EMAIL_AND_PASSWORD_USE_CASE',
  );
}
