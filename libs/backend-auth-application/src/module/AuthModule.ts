import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  AccessTokenConfigPort,
  AuthToken,
  GetAccessTokenUseCaseImpl,
} from '@svconnect/backend-auth-core';
import { AccessTokenConfigAdapter } from '@svconnect/backend-auth-infrastructure';
import { UserModule } from '@svconnect/backend-user-application';

import { AuthController } from '../controller/AuthController';

const repositoryProviders: Provider[] = [
  {
    provide: AuthToken.ACCESS_TOKEN_CONFIG,
    useClass: AccessTokenConfigAdapter,
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: AuthToken.GET_ACCESS_TOKEN_USE_CASE,
    useFactory: (accessTokenConfig: AccessTokenConfigPort) =>
      new GetAccessTokenUseCaseImpl(accessTokenConfig),
    inject: [AuthToken.ACCESS_TOKEN_CONFIG],
  },
];

@Module({
  imports: [CqrsModule, UserModule],
  controllers: [AuthController],
  providers: [...repositoryProviders, ...useCaseProviders],
})
export class AuthModule {}
