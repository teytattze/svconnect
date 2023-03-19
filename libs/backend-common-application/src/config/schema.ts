import { booleanStringSchema } from '@svconnect/backend-common-core';
import { z } from 'zod';

export const apiConfigSchema = z.object({
  hostname: z.string(),
  port: z.coerce.number().positive(),
  prefix: z.string(),
});

export const dbConfigSchema = z.object({
  type: z.literal('mysql'),
  host: z.string(),
  port: z.coerce.number().positive(),
  username: z.string(),
  password: z.string(),
  name: z.string(),
  dropSchema: booleanStringSchema.transform((v) => v === 'true'),
});
