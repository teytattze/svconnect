import {
  TypeOrmBaseEntity,
  TypeOrmBaseEntityPayload,
} from '@svconnect/backend-common-infrastructure';
import { Column, Entity } from 'typeorm';

type TypeOrmStudentEntityPayload = TypeOrmBaseEntityPayload & {
  projectIds: string[];
};

@Entity('students')
export class TypeOrmStudentEntity extends TypeOrmBaseEntity {
  @Column({ type: 'set' })
  projectIds: string[];

  constructor({
    projectIds,
    ...baseEntityPayload
  }: TypeOrmStudentEntityPayload) {
    super(baseEntityPayload);
    this.projectIds = projectIds;
  }
}
