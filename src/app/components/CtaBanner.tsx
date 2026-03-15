import { siteLinks } from '../constants/siteLinks';
import { GitHubMark, ScanSearch } from './icons';

export function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__inner">
        <h2>Stop guessing. Start scanning.</h2>
        <p>
          Free, open source, no account required. Paste a link and know what an extension
          can access in under 30 seconds.
        </p>
        <div className="cta-banner__actions">
          <a className="button button--primary button--lg" href={siteLinks.app} target="_blank" rel="noreferrer">
            <ScanSearch className="icon-inline" />
            Try ExtensionChecker now
          </a>
          <a className="button button--ghost" href={siteLinks.github} target="_blank" rel="noreferrer">
            <GitHubMark className="icon-inline" />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
