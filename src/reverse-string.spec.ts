import { describe, it, expect } from 'vitest';
import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('should reverse a simple string', () => {
    const input = 'hello';
    const expectedOutput = 'olleh';
    expect(reverseString(input)).toBe(expectedOutput);
  });

  it('should return an empty string when input is empty', () => {
    const input = '';
    const expectedOutput = '';
    expect(reverseString(input)).toBe(expectedOutput);
  });

  it('should reverse a string with special characters', () => {
    const input = 'h@llo!';
    const expectedOutput = '!oll@h';
    expect(reverseString(input)).toBe(expectedOutput);
  });

  it('should reverse a string with spaces', () => {
    const input = 'hello world';
    const expectedOutput = 'dlrow olleh';
    expect(reverseString(input)).toBe(expectedOutput);
  });

  it('should reverse a string with numbers', () => {
    const input = '12345';
    const expectedOutput = '54321';
    expect(reverseString(input)).toBe(expectedOutput);
  });

  it('should reverse a string with mixed characters', () => {
    const input = 'a1b2c3';
    const expectedOutput = '3c2b1a';
    expect(reverseString(input)).toBe(expectedOutput);
  });
});
