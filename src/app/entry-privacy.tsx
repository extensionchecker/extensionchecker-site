import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppShell } from './AppShell';
import { PrivacyPage } from './pages/PrivacyPage';
import './styles/global.css';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <AppShell>
      <PrivacyPage />
    </AppShell>
  </StrictMode>,
);
