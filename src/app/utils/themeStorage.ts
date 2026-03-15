import type { ThemePreference } from '../types/theme';

export const themeStorageKey = 'extensionchecker-theme';

const validThemes: ThemePreference[] = ['system', 'light', 'dark'];

export function isThemePreference(value: string | null): value is ThemePreference {
  return value !== null && validThemes.includes(value as ThemePreference);
}

export function getStoredTheme(storage: Pick<Storage, 'getItem'>): ThemePreference {
  const value = storage.getItem(themeStorageKey);

  return isThemePreference(value) ? value : 'system';
}

export function resolveTheme(preference: ThemePreference, prefersDark: boolean): Exclude<ThemePreference, 'system'> {
  if (preference === 'system') {
    return prefersDark ? 'dark' : 'light';
  }

  return preference;
}
