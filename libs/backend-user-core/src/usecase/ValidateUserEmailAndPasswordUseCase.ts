import { UseCase } from '@svconnect/backend-common-core';

import { UserUseCaseDto } from '../dto/UserUseCaseDto';
import { InvalidUserEmailException } from '../exception/InvalidUserEmailException';
import { InvalidUserPasswordException } from '../exception/InvalidUserPasswordException';
import { UserRepositoryPort } from '../type/UserRepositoryPort';
import { ValidateUserEmailAndPasswordPort } from '../type/ValidateUserEmailAndPasswordPort';

export interface ValidateUserEmailAndPasswordUseCase
  extends UseCase<ValidateUserEmailAndPasswordPort, UserUseCaseDto> {}

export class ValidateUserEmailAndPasswordUseCaseImpl
  implements ValidateUserEmailAndPasswordUseCase
{
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute({
    email,
    password,
  }: ValidateUserEmailAndPasswordPort): Promise<UserUseCaseDto> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new InvalidUserEmailException();

    const isPasswordValid = await user.verifyPassword(password);
    if (!isPasswordValid) throw new InvalidUserPasswordException();

    return UserUseCaseDto.fromEntity(user);
  }
}
