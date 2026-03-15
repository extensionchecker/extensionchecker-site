import { siteLinks } from '../constants/siteLinks';
import { ExternalLink, FileText, GitHubMark, QuestionCircle, ShieldCheck } from './icons';

interface FooterProps {
  year: number;
}

export function Footer({ year }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>&copy; {year} ExtensionChecker</p>
      <nav className="site-footer__links" aria-label="Footer">
        <a className="link-with-icon" href="/faq/">
          <QuestionCircle className="icon-inline" />
          FAQ
        </a>
        <a className="link-with-icon" href="/terms/">
          <FileText className="icon-inline" />
          Terms
        </a>
        <a className="link-with-icon" href="/privacy/">
          <ShieldCheck className="icon-inline" />
          Privacy
        </a>
        <a className="link-with-icon" href={siteLinks.app} target="_blank" rel="noreferrer">
          <ExternalLink className="icon-inline" />
          Scanner
        </a>
        <a className="link-with-icon" href={siteLinks.github} target="_blank" rel="noreferrer">
          <GitHubMark className="icon-inline" />
          GitHub
        </a>
      </nav>
    </footer>
  );
}
