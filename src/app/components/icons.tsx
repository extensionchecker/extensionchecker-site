import type { SVGProps } from 'react';

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" {...props}>
      <path d="M88 16H72c0-8.8-7.2-16-16-16S40 7.2 40 16H24c-4.4 0-8 3.6-8 8v16c-8.8 0-16 7.2-16 16s7.2 16 16 16v16c0 4.4 3.6 8 8 8h16c0-8.8 7.2-16 16-16s16 7.2 16 16h16c4.4 0 8-3.6 8-8V72c8.8 0 16-7.2 16-16s-7.2-16-16-16V24c0-4.4-3.6-8-8-8z" fill="currentColor" opacity="0.7"/>
      <circle cx="30" cy="106" r="22" fill="#4caf50"/>
      <path d="M21 106l6 6 12-12" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="98" cy="106" r="22" fill="#f44336"/>
      <path d="M89 97l18 18M107 97l-18 18" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ThemeSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77" />
    </svg>
  );
}

export function ThemeMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M20 14.2A8 8 0 1 1 9.8 4 6.5 6.5 0 0 0 20 14.2Z" />
    </svg>
  );
}

export function ThemeSystem(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}
