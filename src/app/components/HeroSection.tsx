import { siteLinks } from '../constants/siteLinks';

export function HeroSection(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">100% free &middot; No login &middot; Open source</div>
          <h1>
            The free browser extension scanner
            <span className="hero__highlight"> that won&apos;t go away.</span>
          </h1>
          <p className="hero__lede">
            So long as there are browser extensions, checking them for security and
            privacy concerns should be free and easy for everyone. No paywall. No
            login. Paste a store link, get a clear risk breakdown — that&apos;s it.
          </p>
          <div className="hero__actions">
            <a className="button button--primary button--lg" href={siteLinks.app} target="_blank" rel="noreferrer">
              Scan an extension now
            </a>
            <a className="button button--secondary" href={siteLinks.github} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
          <p className="hero__license">
            MIT licensed. Fork it, self-host it, commercialize it. We don&apos;t care — we just
            want this tool to exist.
          </p>
        </div>
        <div className="hero__visual">
          <img
            src="/images/mockups/desktop.png"
            alt="ExtensionChecker app showing a browser extension risk analysis"
            className="hero__mockup hero__mockup--desktop"
            width="1920"
            height="1440"
          />
          <img
            src="/images/mockups/tablet.png"
            alt="ExtensionChecker on a tablet"
            className="hero__mockup hero__mockup--tablet"
            width="1920"
            height="1440"
          />
          <img
            src="/images/mockups/iphone.png"
            alt="ExtensionChecker on a mobile phone"
            className="hero__mockup hero__mockup--mobile"
            width="1920"
            height="1440"
          />
        </div>
      </div>
    </section>
  );
}
