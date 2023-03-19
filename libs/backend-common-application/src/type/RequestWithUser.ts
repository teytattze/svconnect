import { UserUseCaseDto } from '@svconnect/backend-user-core';
import { Request } from 'express';

export type RequestWithUser = Request & {
  user: UserUseCaseDto;
};
