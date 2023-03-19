import { TypeOrmBaseEntity } from '@svconnect/backend-common-infrastructure';
import { Column, Entity } from 'typeorm';

@Entity('students')
export class TypeOrmStudentEntity extends TypeOrmBaseEntity {
  @Column('simple-array')
  projectIds: string[];
}
