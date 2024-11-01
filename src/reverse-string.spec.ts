import { describe, it, expect } from 'vitest';
import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('should reverse a normal string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should reverse a string with special characters', () => {
    expect(reverseString('123!@#')).toBe('#@!321');
  });

  it('should reverse a string with mixed case', () => {
    expect(reverseString('HeLLo')).toBe('oLLeH');
  });

  it('should reverse a string with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  it('should return an empty string when input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  it('should reverse a palindrome string to the same string', () => {
    expect(reverseString('madam')).toBe('madam');
  });

  it('should reverse a single character string to the same string', () => {
    expect(reverseString('a')).toBe('a');
  });
});
