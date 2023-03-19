import { Column, PrimaryColumn } from 'typeorm';

export abstract class TypeOrmBaseEntity {
  @PrimaryColumn()
  id: string;
  @Column('date')
  createdAt: Date;
  @Column('date')
  updatedAt: Date;
}
