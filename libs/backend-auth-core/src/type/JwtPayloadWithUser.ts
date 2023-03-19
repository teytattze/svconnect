import { UserUseCaseDto } from '@svconnect/backend-user-core';
import { JwtPayload } from 'jsonwebtoken';

export type JwtPayloadWithUser = JwtPayload & {
  user: UserUseCaseDto;
};
