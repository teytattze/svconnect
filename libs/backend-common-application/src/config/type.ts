import { z } from 'zod';

import { apiConfigSchema, dbConfigSchema } from './schema';

export type ApiConfig = z.infer<typeof apiConfigSchema>;
export type DBConfig = z.infer<typeof dbConfigSchema>;
