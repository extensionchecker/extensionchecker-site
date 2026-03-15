import { useEffect, useMemo, useState } from 'react';
import type { ThemePreference } from '../types/theme';
import { getStoredTheme, resolveTheme, themeStorageKey } from '../utils/themeStorage';

function getSystemPreference(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function useThemePreference(): {
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
  resolvedTheme: 'light' | 'dark';
} {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => getStoredTheme(window.localStorage));
  const [prefersDark, setPrefersDark] = useState<boolean>(() => getSystemPreference());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent): void => {
      setPrefersDark(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const resolvedTheme = useMemo(
    () => resolveTheme(preference, prefersDark),
    [preference, prefersDark],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.dataset.themePreference = preference;
    window.localStorage.setItem(themeStorageKey, preference);
  }, [preference, resolvedTheme]);

  return {
    preference,
    resolvedTheme,
    setPreference: setPreferenceState,
  };
}
