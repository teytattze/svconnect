import { AccessTokenConfigPort } from '@svconnect/backend-auth-core';
import { Algorithm } from 'jsonwebtoken';

export class AccessTokenConfigAdapter implements AccessTokenConfigPort {
  getPublicKey(): string {
    return 'publicKey';
  }

  getPrivateKey(): string {
    return 'privateKey';
  }

  getAlgorithm(): Algorithm {
    return 'ES512';
  }

  getExpiresIn(): string {
    return '1h';
  }
}
