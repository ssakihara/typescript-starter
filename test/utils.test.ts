import { expect, test } from 'vitest';
import { sumPositives } from '~/utils';

test('adds 1 + 2 to equal 3', () => {
  expect(() => sumPositives(-1, 1)).toThrow();
  expect(() => sumPositives(1, -1)).toThrow();
  expect(sumPositives(1, 2)).toBe(3);
});
