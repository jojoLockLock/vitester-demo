/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { reverseString } from './reverse-string';
import { describe, it, expect } from 'vitest';

describe('reverseString', () => {
  it('should reverse a normal string', () => {
    const result = reverseString('hello');
    expect(result).toBe('olleh');
  });

  it('should return an empty string when input is empty', () => {
    const result = reverseString('');
    expect(result).toBe('');
  });

  it('should reverse a string with special characters', () => {
    const result = reverseString('!@#');
    expect(result).toBe('#@!');
  });

  it('should reverse a string with spaces', () => {
    const result = reverseString('a b c');
    expect(result).toBe('c b a');
  });
});