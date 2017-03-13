import { capitalizeAll } from './utils';

describe('capitalizeAll', () => {
  test('should turn all letters of a sentence into uppercase', () => {
    const word = 'heLLo World';
    expect(capitalizeAll(word)).toBe('HELLO WORLD');
  });
});
