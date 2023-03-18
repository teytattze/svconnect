import { UUID } from '@svconnect/backend-common-core';

import { StudentEntity } from '../entity/StudentEntity';
import { StudentUseCaseDto } from './StudentUseCaseDto';

describe('StudentUseCaseDto', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('when a student entity is given, then it should transform successfully', () => {
    const entity = new StudentEntity({
      id: new UUID('entityId'),
      projectIds: [new UUID('supervisingProjectId')],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const dto = StudentUseCaseDto.fromEntity(entity);

    expect(dto.id).toEqual('entityId');
    expect(dto.projectIds).toStrictEqual(['projectId']);
    expect(dto.updatedAt).toEqual(new Date());
    expect(dto.createdAt).toEqual(new Date());
  });
});
