import { siteLinks } from '../constants/siteLinks';

const pathCards = [
  {
    icon: '\u{1F91D}',
    title: 'Contribute',
    text: 'Found a bug? Want a feature? Open a PR. This project grows because people like you show up.',
    link: siteLinks.organization,
    linkLabel: 'View the org on GitHub',
  },
  {
    icon: '\u{1F527}',
    title: 'Fork & self-host',
    text: 'Need it on your own infra? Clone the repo, customize the rules, and run it wherever you want. Zero vendor lock-in.',
    link: siteLinks.github,
    linkLabel: 'Clone the repo',
  },
  {
    icon: '\u{1F4B0}',
    title: 'Go commercial',
    text: 'The MIT license means you can build a paid product on top of this. Add premium features, charge for it, ship it. Seriously.',
    link: siteLinks.github,
    linkLabel: 'Read the license',
  },
] as const;

export function OpenSourceSection() {
  return (
    <section className="oss-section">
      <div className="oss-section__bg" aria-hidden="true" />
      <div className="oss-section__inner">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Open source to the bone</p>
          <h2>We built this to be forked, not hoarded.</h2>
          <p className="section-lede">
            ExtensionChecker is MIT licensed. That is not a disclaimer at the bottom of a
            README — it is the whole point. Use it, change it, build on it, compete with
            it. We want this tool to exist everywhere.
          </p>
        </div>
        <div className="oss-grid">
          {pathCards.map((card) => (
            <article key={card.title} className="card oss-card">
              <span className="oss-card__icon" aria-hidden="true">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href={card.link} target="_blank" rel="noreferrer" className="oss-card__link">
                {card.linkLabel} &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
