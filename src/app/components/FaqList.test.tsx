import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FaqPage } from '../pages/FaqPage';

describe('FaqPage', () => {
  it('renders the FAQ content from markdown', () => {
    render(<FaqPage />);

    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('What does ExtensionChecker do?')).toBeInTheDocument();
    expect(screen.getByText(/MIT license/i)).toBeInTheDocument();
  });
});
