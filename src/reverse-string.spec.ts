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
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should reverse a palindrome string to itself', () => {
    expect(reverseString('madam')).toBe('madam');
  });

  it('should reverse a string with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  it('should reverse a string with mixed characters', () => {
    expect(reverseString('a1b2c3')).toBe('3c2b1a');
  });
});
