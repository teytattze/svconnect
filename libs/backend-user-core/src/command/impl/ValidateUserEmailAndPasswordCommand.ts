import { ValidateUserEmailAndPasswordPort } from '../../type/ValidateUserEmailAndPasswordPort';

export class ValidateUserEmailAndPasswordCommand
  implements ValidateUserEmailAndPasswordPort
{
  email: string;
  password: string;

  constructor({ email, password }: ValidateUserEmailAndPasswordPort) {
    this.email = email;
    this.password = password;
  }
}
