import type { ReactNode } from 'react';
import { useThemePreference } from './hooks/useThemePreference';
import { SiteHeader } from './components/SiteHeader';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { preference, setPreference } = useThemePreference();

  return (
    <div className="site-shell">
      <SiteHeader preference={preference} onThemeChange={setPreference} />
      <main className="site-main">
        {children}
      </main>
    </div>
  );
}
