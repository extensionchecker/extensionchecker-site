const problemCards = [
  {
    icon: '\u{1F6A8}',
    title: 'The options are thin',
    text: 'Search for a browser extension scanner and you will find Chrome-only tools, abandoned side projects, or paid platforms with free tiers that barely cover the basics. A general-purpose, multi-browser option that is truly free should just exist.',
  },
  {
    icon: '\u{1F50D}',
    title: 'Manifests are unreadable',
    text: 'Raw JSON full of permission strings like "declarativeNetRequest" is designed for browsers, not humans. Nobody should need to parse a manifest to decide if an extension is safe.',
  },
  {
    icon: '\u{1F512}',
    title: 'Security needs open tools',
    text: 'A security tool you cannot audit is a contradiction. Researchers, IT admins, and everyday users need something they can run, verify, and trust \u2014 not a black box behind someone else\u2019s paywall.',
  },
] as const;

export function ProblemSection(): JSX.Element {
  return (
    <section className="problem-section">
      <div className="problem-section__bg" aria-hidden="true" />
      <div className="problem-section__inner">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">The problem</p>
          <h2>
            Checking a browser extension for safety should be
            <span className="problem-section__emphasis"> free and easy.</span>
          </h2>
          <p className="section-lede">
            Browser extensions can access your passwords, browsing history, and
            keystrokes. The tools that help people vet them are either Chrome-only,
            abandoned, or locked behind enterprise paywalls. We think a solid,
            multi-browser scanner should just exist — free, open, and maintained.
          </p>
        </div>
        <div className="problem-grid">
          {problemCards.map((card) => (
            <article key={card.title} className="card detail-card detail-card--accent">
              <span className="detail-card__icon" aria-hidden="true">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
