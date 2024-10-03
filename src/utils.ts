import { type ZodNumber, numberSchema } from '~/models/utils';

/**
 * Add two numbers
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of the two numbers
 * @example
 * sumPositives(1, 2) // 3
 */
export const sumPositives = (a: ZodNumber, b: ZodNumber) => {
  numberSchema.parse(a);
  numberSchema.parse(b);

  return a + b;
};
