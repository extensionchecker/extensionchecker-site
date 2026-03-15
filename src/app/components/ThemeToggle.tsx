import type { ThemePreference } from '../types/theme';
import { ThemeMoon, ThemeSun, ThemeSystem } from './icons';

interface ThemeToggleProps {
  preference: ThemePreference;
  onChange: (preference: ThemePreference) => void;
}

const cycle: readonly ThemePreference[] = ['system', 'light', 'dark'] as const;

const iconMap = {
  system: { Icon: ThemeSystem, label: 'Theme: system (click to switch to light)' },
  light: { Icon: ThemeSun, label: 'Theme: light (click to switch to dark)' },
  dark: { Icon: ThemeMoon, label: 'Theme: dark (click to switch to system)' },
} as const;

export function ThemeToggle({ preference, onChange }: ThemeToggleProps) {
  const { Icon, label } = iconMap[preference];
  const next = cycle[(cycle.indexOf(preference) + 1) % cycle.length]!;

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      onClick={() => onChange(next)}
    >
      <Icon className="theme-toggle__icon" />
    </button>
  );
}
