import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ConfigToken,
  dbConfigFactory,
} from '@svconnect/backend-common-application';
import {
  DIToken,
  UserRepositoryPort,
  ValidateUserEmailAndPasswordHandler,
  ValidateUserEmailAndPasswordUseCaseImpl,
} from '@svconnect/backend-user-core';
import {
  TypeOrmLecturerEntity,
  TypeOrmStudentEntity,
  TypeOrmUserEntity,
  UserRepositoryAdapter,
} from '@svconnect/backend-user-infrastructure';

const commandHandlers = [ValidateUserEmailAndPasswordHandler];

const repositoryProviders: Provider[] = [
  {
    provide: DIToken.USER_REPOSITORY,
    useClass: UserRepositoryAdapter,
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: DIToken.VALIDATE_USER_EMAIL_AND_PASSWORD_USE_CASE,
    useFactory: (userRepository: UserRepositoryPort) =>
      new ValidateUserEmailAndPasswordUseCaseImpl(userRepository),
    inject: [DIToken.USER_REPOSITORY],
  },
];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigType<typeof dbConfigFactory>) => ({
        type: config.type,
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.name,
        dropSchema: config.dropSchema,
        entities: [
          TypeOrmLecturerEntity,
          TypeOrmStudentEntity,
          TypeOrmUserEntity,
        ],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigToken.DB],
    }),
    TypeOrmModule.forFeature([TypeOrmUserEntity]),
  ],
  providers: [...commandHandlers, ...repositoryProviders, ...useCaseProviders],
  exports: [...commandHandlers],
})
export class UserModule {}
