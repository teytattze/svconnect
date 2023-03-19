import { apiConfigFactory, dbConfigFactory } from './factory';

export class ConfigToken {
  static API: string = apiConfigFactory.KEY;
  static DB: string = dbConfigFactory.KEY;
}
