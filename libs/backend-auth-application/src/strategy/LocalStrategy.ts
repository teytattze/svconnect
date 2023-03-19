import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { PassportStrategy } from '@nestjs/passport';
import {
  UserUseCaseDto,
  ValidateUserEmailAndPasswordCommand,
} from '@svconnect/backend-user-core';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly commandBus: CommandBus) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<UserUseCaseDto> {
    return await this.commandBus.execute(
      new ValidateUserEmailAndPasswordCommand({
        email,
        password,
      }),
    );
  }
}
