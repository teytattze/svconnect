import {
  Nullable,
  TypeOrmBaseEntity,
  TypeOrmBaseEntityPayload,
} from '@svconnect/backend-common-core';
import { UserRole } from '@svconnect/backend-user-core';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { TypeOrmLecturerEntity } from './TypeOrmLecturerEntity';
import { TypeOrmStudentEntity } from './TypeOrmStudentEntity';

type TypeOrmUserEntityPayload = TypeOrmBaseEntityPayload & {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  password: string;
  roles: UserRole[];
  lecturer: Nullable<TypeOrmLecturerEntity>;
  student: Nullable<TypeOrmStudentEntity>;
};

@Entity('users')
export class TypeOrmUserEntity extends TypeOrmBaseEntity {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  emailVerified: boolean;
  @Column()
  password: string;
  @Column({
    type: 'set',
    enum: UserRole,
  })
  roles: UserRole[];
  @OneToOne(() => TypeOrmLecturerEntity, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  lecturer: TypeOrmLecturerEntity;
  @OneToOne(() => TypeOrmStudentEntity, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  student: TypeOrmStudentEntity;

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
  }: TypeOrmUserEntityPayload) {
    super(baseEntityPayload);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.emailVerified = emailVerified;
    this.password = password;
    this.roles = roles;
    this.lecturer = lecturer;
    this.student = student;
  }
}
