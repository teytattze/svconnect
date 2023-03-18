import { BaseHttpDto } from '@svconnect/backend-common-application';
import { Nullable } from '@svconnect/backend-common-core';
import { UserRole } from '@svconnect/backend-user-core';

import { LecturerDto } from './LecturerDto';
import { StudentDto } from './StudentDto';

export class UserDto extends BaseHttpDto {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  roles: UserRole[];
  lecturer: Nullable<LecturerDto>;
  student: Nullable<StudentDto>;
}
