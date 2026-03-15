/**
 * A decorative browser-frame mockup showing the ExtensionChecker app UI.
 * Used in the hero section to give visitors a preview of the product.
 */
export function DeviceMockup(): JSX.Element {
  return (
    <div className="device-mockup" aria-hidden="true">
      <div className="device-mockup__browser">
        <div className="device-mockup__toolbar">
          <div className="device-mockup__dots">
            <span />
            <span />
            <span />
          </div>
          <div className="device-mockup__address-bar">
            app.extensionchecker.org
          </div>
        </div>
        <div className="device-mockup__viewport">
          <div className="device-mockup__app-header">
            <span className="device-mockup__logo">ExtensionChecker</span>
          </div>
          <div className="device-mockup__app-body">
            <div className="device-mockup__input-area">
              <div className="device-mockup__label">Paste a URL or ID</div>
              <div className="device-mockup__url-field">
                <span className="device-mockup__url-text">
                  chrome.google.com/webstore/detail/example-ext
                </span>
              </div>
              <div className="device-mockup__action-row">
                <span className="device-mockup__analyze-btn">Analyze</span>
                <div className="device-mockup__browser-chips">
                  <span>Chrome</span>
                  <span>Firefox</span>
                  <span>Edge</span>
                </div>
              </div>
            </div>
            <div className="device-mockup__results">
              <div className="device-mockup__result-row device-mockup__result-row--good">
                <span className="device-mockup__result-icon device-mockup__result-icon--ok" />
                <span>No broad host access</span>
              </div>
              <div className="device-mockup__result-row device-mockup__result-row--good">
                <span className="device-mockup__result-icon device-mockup__result-icon--ok" />
                <span>Limited permissions</span>
              </div>
              <div className="device-mockup__result-row device-mockup__result-row--warn">
                <span className="device-mockup__result-icon device-mockup__result-icon--warn" />
                <span>Background service worker</span>
              </div>
              <div className="device-mockup__result-row device-mockup__result-row--good">
                <span className="device-mockup__result-icon device-mockup__result-icon--ok" />
                <span>1,200+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
