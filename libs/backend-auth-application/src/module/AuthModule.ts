import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  AccessTokenConfigPort,
  DIToken,
  GetAccessTokenUseCaseImpl,
} from '@svconnect/backend-auth-core';
import { AccessTokenConfigAdapter } from '@svconnect/backend-auth-infrastructure';
import { UserModule } from '@svconnect/backend-user-application';

import { AuthController } from '../controller/AuthController';

const repositoryProviders: Provider[] = [
  {
    provide: DIToken.ACCESS_TOKEN_CONFIG,
    useClass: AccessTokenConfigAdapter,
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: DIToken.GET_ACCESS_TOKEN_USE_CASE,
    useFactory: (accessTokenConfig: AccessTokenConfigPort) =>
      new GetAccessTokenUseCaseImpl(accessTokenConfig),
    inject: [DIToken.ACCESS_TOKEN_CONFIG],
  },
];

@Module({
  imports: [CqrsModule, UserModule],
  controllers: [AuthController],
  providers: [...repositoryProviders, ...useCaseProviders],
})
export class AuthModule {}
