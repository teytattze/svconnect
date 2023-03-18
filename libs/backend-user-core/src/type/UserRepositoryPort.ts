import { Nullable } from '@svconnect/backend-common-core';

import { UserEntity } from '../entity/UserEntity';

export interface UserRepositoryPort {
  findByEmail(id: string): Promise<Nullable<UserEntity>>;
  save(user: UserEntity): Promise<void>;
}
