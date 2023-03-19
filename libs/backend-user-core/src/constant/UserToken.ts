export class UserToken {
  static readonly REPOSITORY = Symbol('REPOSITORY');

  static readonly CREATE_USER_USE_CASE = Symbol('CREATE_USER_USE_CASE');
  static readonly VALIDATE_USER_EMAIL_AND_PASSWORD_USE_CASE = Symbol(
    'VALIDATE_USER_EMAIL_AND_PASSWORD_USE_CASE',
  );
}
