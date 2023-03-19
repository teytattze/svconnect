import { UseCase } from '@svconnect/backend-common-core';
import { sign } from 'jsonwebtoken';

import { AccessTokenConfigPort } from '../type/AccessTokenConfigPort';
import { GetAccessTokenUseCasePort } from '../type/GetAccessTokenUseCasePort';
import { JwtPayloadWithUser } from '../type/JwtPayloadWithUser';

export interface GetAccessTokenUseCase
  extends UseCase<GetAccessTokenUseCasePort, string> {}

export class GetAccessTokenUseCaseImpl implements GetAccessTokenUseCase {
  constructor(private readonly accessTokenConfig: AccessTokenConfigPort) {}

  async execute({ user }: GetAccessTokenUseCasePort): Promise<string> {
    const privateKey = this.accessTokenConfig.getPrivateKey();
    const algorithm = this.accessTokenConfig.getAlgorithm();
    const expiresIn = this.accessTokenConfig.getExpiresIn();
    const payload: JwtPayloadWithUser = {
      sub: user.id,
      user,
    };
    return sign(payload, privateKey, {
      algorithm,
      expiresIn,
    });
  }
}
