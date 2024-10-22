import { describe, it, expect } from 'vitest';
import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('should return an empty string when input is an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('should return the same character when input is a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should reverse a typical string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should handle strings with spaces correctly', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should handle strings with special characters', () => {
    expect(reverseString('123! abc')).toBe('cba !321');
  });
});
