/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { reverseString } from './reverse-string';
import { describe, it, expect } from 'vitest';

describe('reverseString', () => {
  it('should reverse a normal string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should return an empty string when input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should reverse a string with special characters', () => {
    expect(reverseString('123!@#')).toBe('#@!321');
  });
});