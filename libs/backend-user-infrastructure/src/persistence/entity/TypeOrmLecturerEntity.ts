import { TypeOrmBaseEntity } from '@svconnect/backend-common-infrastructure';
import { Column, Entity } from 'typeorm';

@Entity('lecturers')
export class TypeOrmLecturerEntity extends TypeOrmBaseEntity {
  @Column('simple-array')
  specialityIds: string[];
  @Column('simple-array')
  supervisingProjectIds: string[];
}
