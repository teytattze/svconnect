import { z } from 'zod';

export const booleanStringSchema = z.union([
  z.literal('false'),
  z.literal('true'),
]);
