import { capitalizeAll } from './utils';

describe('capitalizeAll', () => {
  test('should turn all letters of a sentence into uppercase', () => {
    const words = 'heLLo World';
    expect(capitalizeAll(words)).toBe('HELLO WORLD');
  });
});
