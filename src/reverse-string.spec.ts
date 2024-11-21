/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from 'vitest';
import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('should reverse a regular string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should return an empty string when input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  it('should return the same character when input is a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should reverse a string with special characters', () => {
    expect(reverseString('123!@#')).toBe('#@!321');
  });

  it('should reverse a palindrome correctly', () => {
    expect(reverseString('madam')).toBe('madam');
  });
});
