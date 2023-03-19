import { InjectRepository } from '@nestjs/typeorm';
import { Nullable, isNull } from '@svconnect/backend-common-core';
import { UserEntity, UserRepositoryPort } from '@svconnect/backend-user-core';
import { Repository } from 'typeorm';

import { TypeOrmUserEntity } from './entity/TypeOrmUserEntity';
import { UserEntityMapper } from './mapper/UserEntityMapper';

export class UserRepositoryAdapter implements UserRepositoryPort {
  constructor(
    @InjectRepository(TypeOrmUserEntity)
    private readonly repository: Repository<TypeOrmUserEntity>,
  ) {}

  async findByEmail(email: string): Promise<Nullable<UserEntity>> {
    const typeOrmUser = await this.repository.findOneBy({ email });
    return isNull(typeOrmUser)
      ? null
      : UserEntityMapper.toDomainEntity(typeOrmUser);
  }

  async save(user: UserEntity): Promise<void> {
    const typeOrmUser = UserEntityMapper.toTypeOrmEntity(user);
    await this.repository.save(typeOrmUser);
  }
}
