import { z } from 'zod';

export const numberSchema = z.number().min(0);
export type ZodNumber = z.infer<typeof numberSchema>;
