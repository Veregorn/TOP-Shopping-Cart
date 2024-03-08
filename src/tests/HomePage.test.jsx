import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from '../components/HomePage.jsx';

describe('HomePage', () => {
  it('should render the HomePage component', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByText('NEW AROUND HERE')).toBeInTheDocument();
  });

  it('should render the Favorites component', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    await screen.findByText('A few of our');
    expect(screen.getByText('A few of our')).toBeInTheDocument();
  });

  it('should render the first four div classname products', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    await screen.findByText('A few of our');
    expect(screen.getAllByTestId('product').length).toBe(4);
  });
});