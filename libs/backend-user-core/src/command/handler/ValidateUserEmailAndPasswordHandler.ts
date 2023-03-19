import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UserToken } from '../../constant/UserToken';
import { UserUseCaseDto } from '../../dto/UserUseCaseDto';
import { ValidateUserEmailAndPasswordUseCase } from '../../usecase/ValidateUserEmailAndPasswordUseCase';
import { ValidateUserEmailAndPasswordCommand } from '../impl/ValidateUserEmailAndPasswordCommand';

@CommandHandler(ValidateUserEmailAndPasswordCommand)
export class ValidateUserEmailAndPasswordHandler
  implements ICommandHandler<ValidateUserEmailAndPasswordCommand>
{
  constructor(
    @Inject(UserToken.VALIDATE_USER_EMAIL_AND_PASSWORD_USE_CASE)
    private readonly validateUserEmailAndPasswordUseCase: ValidateUserEmailAndPasswordUseCase,
  ) {}

  async execute(
    payload: ValidateUserEmailAndPasswordCommand,
  ): Promise<UserUseCaseDto> {
    return await this.validateUserEmailAndPasswordUseCase.execute(payload);
  }
}
