import { registerAs } from '@nestjs/config';

import { apiConfigSchema, dbConfigSchema } from './schema';
import { ApiConfig, DBConfig } from './type';

export const apiConfigFactory = registerAs('api', (): ApiConfig => {
  const apiConfig = {
    hostname: process.env.API_HOSTNAME,
    port: process.env.API_PORT,
    prefix: process.env.API_PREFIX,
  };
  return apiConfigSchema.parse(apiConfig);
});

export const dbConfigFactory = registerAs('db', (): DBConfig => {
  const dbConfig = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    dropSchema: process.env.DB_DROP_SCHEMA,
  };
  return dbConfigSchema.parse(dbConfig);
});
