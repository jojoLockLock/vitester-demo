/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { reverseString } from './reverse-string';
import { describe, it, expect } from 'vitest';

describe('reverseString', () => {
  it('should return an empty string when input is an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('should return the same character when input is a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should reverse a regular string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should reverse a string with special characters', () => {
    expect(reverseString('!@#$')).toBe('$#@!');
  });
});