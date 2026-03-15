import { describe, expect, it } from 'vitest';
import { getStoredTheme, isThemePreference, resolveTheme } from './themeStorage';

describe('themeStorage', () => {
  it('accepts only supported theme preferences', () => {
    expect(isThemePreference('system')).toBe(true);
    expect(isThemePreference('light')).toBe(true);
    expect(isThemePreference('dark')).toBe(true);
    expect(isThemePreference('sepia')).toBe(false);
    expect(isThemePreference(null)).toBe(false);
  });

  it('falls back to system when storage is empty or invalid', () => {
    expect(getStoredTheme({ getItem: () => null })).toBe('system');
    expect(getStoredTheme({ getItem: () => 'unexpected' })).toBe('system');
  });

  it('resolves the system theme from the current preference', () => {
    expect(resolveTheme('system', true)).toBe('dark');
    expect(resolveTheme('system', false)).toBe('light');
    expect(resolveTheme('dark', false)).toBe('dark');
  });
});
