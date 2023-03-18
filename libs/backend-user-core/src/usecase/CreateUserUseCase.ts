import { UseCase, isNull } from '@svconnect/backend-common-core';

import { UserUseCaseDto } from '../dto/UserUseCaseDto';
import { LecturerEntity } from '../entity/LecturerEntity';
import { StudentEntity } from '../entity/StudentEntity';
import { UserEntity } from '../entity/UserEntity';
import { EmailAlreadyExistedException } from '../exception/EmailAlreadyExistedException';
import { CreateUserPort } from '../type/CreateUserPort';
import { UserRepositoryPort } from '../type/UserRepositoryPort';

export interface CreateUserUseCase
  extends UseCase<CreateUserPort, UserUseCaseDto> {}

export class CreateUserUseCaseImpl implements CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(payload: CreateUserPort): Promise<UserUseCaseDto> {
    const { email } = payload;

    const isEmailUnique = await this.isEmailUnique(email);
    if (!isEmailUnique) {
      throw new EmailAlreadyExistedException();
    }

    const newUser = this.createNewUser(payload);
    await this.userRepository.create(newUser);

    return UserUseCaseDto.fromEntity(newUser);
  }

  private async isEmailUnique(email: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    return isNull(user);
  }

  private createNewUser({
    firstName,
    lastName,
    email,
    emailVerified,
    password,
    roles,
  }: CreateUserPort): UserEntity {
    const newUser = new UserEntity({
      firstName,
      lastName,
      email,
      emailVerified,
      password,
      roles,
    });

    if (newUser.isLecturer()) {
      newUser.lecturer = new LecturerEntity();
    }
    if (newUser.isStudent()) {
      newUser.student = new StudentEntity();
    }

    return newUser;
  }
}
