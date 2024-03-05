import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import HomePage from '../components/HomePage.jsx';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('HomePage', () => {
  it('renders headline', () => {
    render(<HomePage title="React" />);
    
    screen.debug();
    // check if App component renders headline
  });
});