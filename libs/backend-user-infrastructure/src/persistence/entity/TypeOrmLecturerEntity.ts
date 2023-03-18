import {
  TypeOrmBaseEntity,
  TypeOrmBaseEntityPayload,
} from '@svconnect/backend-common-infrastructure';
import { Column, Entity } from 'typeorm';

type TypeOrmLecturerEntityPayload = TypeOrmBaseEntityPayload & {
  specialityIds: string[];
  supervisingProjectIds: string[];
};

@Entity('lecturers')
export class TypeOrmLecturerEntity extends TypeOrmBaseEntity {
  @Column({ type: 'set' })
  specialityIds: string[];
  @Column({ type: 'set' })
  supervisingProjectIds: string[];

  constructor({
    specialityIds,
    supervisingProjectIds,
    ...baseEntityPayload
  }: TypeOrmLecturerEntityPayload) {
    super(baseEntityPayload);
    this.specialityIds = specialityIds;
    this.supervisingProjectIds = supervisingProjectIds;
  }
}
