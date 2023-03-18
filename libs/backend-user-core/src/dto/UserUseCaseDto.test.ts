import { UUID } from '@svconnect/backend-common-core';

import { LecturerEntity } from '../entity/LecturerEntity';
import { StudentEntity } from '../entity/StudentEntity';
import { UserEntity } from '../entity/UserEntity';
import { UserRole } from '../enum/UserRole';
import { LecturerUseCaseDto } from './LecturerUseCaseDto';
import { StudentUseCaseDto } from './StudentUseCaseDto';
import { UserUseCaseDto } from './UserUseCaseDto';

describe('UserUseCaseDto', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('when a user entity with a student role is given, then it should transform successfully', () => {
    const entity = new UserEntity({
      id: new UUID('entityId'),
      firstName: 'mockFirstName',
      lastName: 'mockLastName',
      email: 'mockEmail@gmail.com',
      emailVerified: true,
      password: 'mockPassword',
      roles: [UserRole.STUDENT],
      student: new StudentEntity({
        id: new UUID('entityId'),
        projectIds: [new UUID('projectId')],
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const dto = UserUseCaseDto.fromEntity(entity);

    expect(dto.id).toEqual('entityId');
    expect(dto.firstName).toEqual('mockFirstName');
    expect(dto.lastName).toEqual('mockLastName');
    expect(dto.email).toEqual('mockEmail@gmail.com');
    expect(dto.emailVerified).toEqual(true);
    expect(dto.password).not.toBeDefined();
    expect(dto.roles).toStrictEqual([UserRole.STUDENT]);
    expect(dto.lecturer).toBeNull();
    expect(dto.student).toBeInstanceOf(StudentUseCaseDto);
    expect(dto.updatedAt).toEqual(new Date());
    expect(dto.createdAt).toEqual(new Date());
  });

  test('when a user entity with a lecturer role is given, then it should transform successfully', () => {
    const entity = new UserEntity({
      id: new UUID('entityId'),
      firstName: 'mockFirstName',
      lastName: 'mockLastName',
      email: 'mockEmail@gmail.com',
      emailVerified: true,
      password: 'mockPassword',
      roles: [UserRole.LECTURER],
      lecturer: new LecturerEntity({
        id: new UUID('entityId'),
        specialityIds: [new UUID('specialityId')],
        supervisingProjectIds: [new UUID('supervisingProjectId')],
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const dto = UserUseCaseDto.fromEntity(entity);

    expect(dto.id).toEqual('entityId');
    expect(dto.firstName).toEqual('mockFirstName');
    expect(dto.lastName).toEqual('mockLastName');
    expect(dto.email).toEqual('mockEmail@gmail.com');
    expect(dto.emailVerified).toEqual(true);
    expect(dto.password).not.toBeDefined();
    expect(dto.roles).toStrictEqual([UserRole.LECTURER]);
    expect(dto.lecturer).toBeInstanceOf(LecturerUseCaseDto);
    expect(dto.student).toBeNull();
    expect(dto.updatedAt).toEqual(new Date());
    expect(dto.createdAt).toEqual(new Date());
  });
});
