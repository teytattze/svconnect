import type { Algorithm } from 'jsonwebtoken';

export interface AccessTokenConfigPort {
  getAlgorithm(): Algorithm;
  getPublicKey(): string;
  getPrivateKey(): string;
  getExpiresIn(): string;
}
