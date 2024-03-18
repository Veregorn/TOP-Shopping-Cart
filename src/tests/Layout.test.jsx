import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Promotion from '../components/Promotion.jsx';
import Footer from '../components/Footer.jsx';

describe('Layout', () => {
    it('should render the Header component', () => {
        render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
        );
        expect(screen.getByText('JEWM')).toBeInTheDocument();
    });
    
    it('should render the Promotion component', () => {
        render(
        <MemoryRouter>
            <Promotion />
        </MemoryRouter>
        );
        expect(screen.getByText('Free shipping on all products.')).toBeInTheDocument();
    });
    
    it('should render the Footer component', () => {
        render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
        );
        expect(screen.getByText('Follow my work on GitHub')).toBeInTheDocument();
    });
});