import { Column, PrimaryColumn } from 'typeorm';

export type TypeOrmBaseEntityPayload = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export class TypeOrmBaseEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;

  constructor({ id, createdAt, updatedAt }: TypeOrmBaseEntityPayload) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
