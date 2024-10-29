import { describe, it, expect } from 'vitest';
import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('should reverse a regular string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should return an empty string when input is an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('should reverse a string with special characters', () => {
    expect(reverseString('!@#')).toBe('#@!');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('a b c')).toBe('c b a');
  });

  it('should reverse a palindrome', () => {
    expect(reverseString('madam')).toBe('madam');
  });
});
