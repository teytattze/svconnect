import { Exception } from '@svconnect/backend-common-core';
import * as config from 'config';

export class Config {
  static NODE_ENV = config.util.getEnv('NODE_ENV');

  static get<T = string>(value: string): T {
    if (!config.has(value)) {
      throw Exception.new({
        statusCode: 500,
        message: `${value} config not found`,
      });
    }
    return config.get<T>(value);
  }
}
