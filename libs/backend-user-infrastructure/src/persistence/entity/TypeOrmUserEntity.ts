import { Nullable } from '@svconnect/backend-common-core';
import { TypeOrmBaseEntity } from '@svconnect/backend-common-infrastructure';
import { UserRole } from '@svconnect/backend-user-core';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { TypeOrmLecturerEntity } from './TypeOrmLecturerEntity';
import { TypeOrmStudentEntity } from './TypeOrmStudentEntity';

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
  lecturer: Nullable<TypeOrmLecturerEntity>;
  @OneToOne(() => TypeOrmStudentEntity, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  student: Nullable<TypeOrmStudentEntity>;
}
