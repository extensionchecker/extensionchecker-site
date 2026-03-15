import { siteLinks } from '../constants/siteLinks';
import type { ThemePreference } from '../types/theme';
import { LogoMark } from './icons';
import { ThemeToggle } from './ThemeToggle';

interface SiteHeaderProps {
  preference: ThemePreference;
  onThemeChange: (preference: ThemePreference) => void;
}

export function SiteHeader({ preference, onThemeChange }: SiteHeaderProps): JSX.Element {
  return (
    <div className="site-header-wrapper">
      <header className="site-header">
        <a className="brand" href="/" aria-label="ExtensionChecker home">
          <LogoMark className="brand__mark" />
          <span className="brand__wordmark">ExtensionChecker</span>
        </a>
        <nav className="site-header__actions" aria-label="Primary navigation">
          <a className="site-header__link" href="/faq/">
            FAQ
          </a>
          <a className="site-header__link" href={siteLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <ThemeToggle preference={preference} onChange={onThemeChange} />
        </nav>
      </header>
    </div>
  );
}
