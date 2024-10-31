import { describe, it, expect } from 'vitest';
import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('should reverse a regular string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should return an empty string when input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  it('should reverse a palindrome', () => {
    expect(reverseString('madam')).toBe('madam');
  });

  it('should handle a single character string', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should reverse a string with special characters', () => {
    expect(reverseString('!@#$')).toBe('$#@!');
  });
});
