import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import {
  ConfigToken,
  apiConfigFactory,
  dbConfigFactory,
} from '@svconnect/backend-common-application';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [apiConfigFactory, dbConfigFactory],
      isGlobal: true,
    }),
  ],
})
export class AppModule {
  static HOSTNAME = 'localhost';
  static PORT = 8000;
  static PREFIX = 'api';

  constructor(
    @Inject(ConfigToken.API)
    private readonly apiConfig: ConfigType<typeof apiConfigFactory>,
  ) {
    AppModule.HOSTNAME = this.apiConfig.hostname;
    AppModule.PORT = this.apiConfig.port;
    AppModule.PREFIX = this.apiConfig.prefix;
  }
}
