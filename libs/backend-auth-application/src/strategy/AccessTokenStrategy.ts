import { Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  AccessTokenConfigPort,
  AuthToken,
  JwtPayloadWithUser,
} from '@svconnect/backend-auth-core';
import { UserUseCaseDto } from '@svconnect/backend-user-core';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';

export class AccessTokenStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(AuthToken.ACCESS_TOKEN_CONFIG)
    private readonly accessTokenConfig: AccessTokenConfigPort,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: accessTokenConfig.getPrivateKey(),
      algorithms: [accessTokenConfig.getAlgorithm()],
    });
  }

  async validate(payload: JwtPayloadWithUser): Promise<UserUseCaseDto> {
    return payload.user;
  }
}
