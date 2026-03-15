interface FooterProps {
  year: number;
}

export function Footer({ year }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>&copy; {year} ExtensionChecker</p>
      <nav className="site-footer__links" aria-label="Footer">
        <a href="/faq/">FAQ</a>
        <a href="/terms/">Terms</a>
        <a href="/privacy/">Privacy</a>
        <a href="https://app.extensionchecker.org" target="_blank" rel="noreferrer">
          Scanner
        </a>
        <a href="https://github.com/extensionchecker/extensionchecker-app" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </footer>
  );
}
