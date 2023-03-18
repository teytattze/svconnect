import {
  BaseEntity,
  BaseEntityPayload,
  Nullable,
} from '@svconnect/backend-common-core';

import { UserRole } from '../enum/UserRole';
import { LecturerEntity } from './LecturerEntity';
import { StudentEntity } from './StudentEntity';

export type UserEntityPayload = BaseEntityPayload & {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified?: boolean;
  password: string;
  roles?: UserRole[];

  lecturer?: LecturerEntity;
  student?: StudentEntity;
};

export class UserEntity extends BaseEntity {
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _email: string;
  private readonly _emailVerified: boolean;
  private readonly _password: string;
  private readonly _roles: UserRole[];

  constructor({
    firstName,
    lastName,
    email,
    emailVerified,
    password,
    roles,
    lecturer,
    student,
    ...baseEntityPayload
  }: UserEntityPayload) {
    super(baseEntityPayload);

    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._emailVerified = emailVerified ?? false;
    this._password = password;
    this._roles = roles ?? [];
    this._lecturer = lecturer ?? null;
    this._student = student ?? null;
  }

  private _lecturer: Nullable<LecturerEntity>;

  get lecturer(): Nullable<LecturerEntity> {
    return this._lecturer;
  }

  set lecturer(value: Nullable<LecturerEntity>) {
    this._lecturer = value;
  }

  private _student: Nullable<StudentEntity>;

  get student(): Nullable<StudentEntity> {
    return this._student;
  }

  set student(value: Nullable<StudentEntity>) {
    this._student = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get emailVerified(): boolean {
    return this._emailVerified;
  }

  get password(): string {
    return this._password;
  }

  get roles(): UserRole[] {
    return this._roles;
  }

  isAdmin(): boolean {
    return this._roles.includes(UserRole.ADMIN);
  }

  isLecturer(): boolean {
    return this._roles.includes(UserRole.LECTURER);
  }

  isStudent(): boolean {
    return this._roles.includes(UserRole.STUDENT);
  }
}
