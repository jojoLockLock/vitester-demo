import { describe, it, expect } from 'vitest';
import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('should return an empty string when input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  it('should return the same string when input is a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should reverse a string with multiple characters', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should handle strings with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should handle strings with special characters', () => {
    expect(reverseString('a!b@c')).toBe('c@b!a');
  });

  it('should handle strings with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  it('should handle strings with mixed characters', () => {
    expect(reverseString('a1b2c3')).toBe('3c2b1a');
  });
});
