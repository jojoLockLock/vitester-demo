describe('reverseString', () => {
  it('should return an empty string when input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  it('should return the same character when input is a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should reverse a regular string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should handle strings with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should handle strings with special characters', () => {
    expect(reverseString('!@#')).toBe('#@!');
  });

  it('should handle palindrome strings', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  // Additional edge cases
  it('should handle strings with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  it('should handle strings with mixed alphanumeric characters', () => {
    expect(reverseString('abc123')).toBe('321cba');
  });

  it('should handle strings with mixed case', () => {
    expect(reverseString('AbCdEfG')).toBe('GfEdCbA');
  });

  it('should handle strings with unicode characters', () => {
    expect(reverseString('😊👍')).toBe('👍😊');
  });

  it('should handle very long strings', () => {
    const longString = 'a'.repeat(1000);
    const reversedLongString = 'a'.repeat(1000);
    expect(reverseString(longString)).toBe(reversedLongString);
  });

  it('should handle strings with newline characters', () => {
    expect(reverseString('hello\nworld')).toBe('dlrow\nolleh');
  });

  it('should handle strings with tab characters', () => {
    expect(reverseString('hello\tworld')).toBe('dlrow\tolleh');
  });

  it('should handle strings with leading and trailing spaces', () => {
    expect(reverseString('  hello  ')).toBe('  olleh  ');
  });

  it('should handle strings with only spaces', () => {
    expect(reverseString('     ')).toBe('     ');
  });

  it('should handle strings with escape characters', () => {
    expect(reverseString('hello\\nworld')).toBe('dlrown\\olleh');
  });
});
