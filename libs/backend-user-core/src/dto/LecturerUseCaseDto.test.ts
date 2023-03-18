import { UUID } from '@svconnect/backend-common-core';

import { LecturerEntity } from '../entity/LecturerEntity';
import { LecturerUseCaseDto } from './LecturerUseCaseDto';

describe('LecturerUseCaseDto', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('when a lecturer entity is given, then it should transform successfully', () => {
    const entity = new LecturerEntity({
      id: new UUID('entityId'),
      specialityIds: [new UUID('specialityId')],
      supervisingProjectIds: [new UUID('supervisingProjectId')],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const dto = LecturerUseCaseDto.fromEntity(entity);

    expect(dto.id).toEqual('entityId');
    expect(dto.specialityIds).toStrictEqual(['specialityId']);
    expect(dto.supervisingProjectIds).toStrictEqual(['supervisingProjectId']);
    expect(dto.updatedAt).toEqual(new Date());
    expect(dto.createdAt).toEqual(new Date());
  });
});
