const browsers = [
  { name: 'Chrome', icon: '/images/browser-icons/icon_chrome.png' },
  { name: 'Firefox', icon: '/images/browser-icons/icon_firefox.png' },
  { name: 'Edge', icon: '/images/browser-icons/icon_edge.png' },
  { name: 'Opera', icon: '/images/browser-icons/icon_opera.png' },
  { name: 'Safari', icon: '/images/browser-icons/icon_safari.png', note: 'upload only' },
] as const;

/**
 * A horizontal strip of browser icons.
 * Sits between the hero and the first content section for social proof.
 */
export function TrustStrip(): JSX.Element {
  return (
    <section className="trust-strip">
      <div className="trust-strip__inner">
        <p className="trust-strip__text">
          Works with extensions from most browser stores
        </p>
        <div className="trust-strip__browsers">
          {browsers.map((b) => (
            <span key={b.name} className="trust-strip__browser">
              <img
                src={b.icon}
                alt={`${b.name} logo`}
                className="trust-strip__icon"
                width="20"
                height="20"
              />
              {b.name}
              {'note' in b ? <span className="trust-strip__note">({b.note})</span> : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
