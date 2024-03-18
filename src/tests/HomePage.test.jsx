import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import HomePage from '../components/HomePage.jsx';
import ScrolledTicker from '../components/ScrolledTicker.jsx';
import { act } from 'react-dom/test-utils';

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

  it('Favorites component should render the first four products from the API call', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    await screen.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    expect(screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
    expect(screen.getByText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument();
    expect(screen.getByText('Mens Cotton Jacket')).toBeInTheDocument();
    expect(screen.getByText('Mens Casual Slim Fit')).toBeInTheDocument();
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

  it('should render the PrimaryCategories component', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    await screen.findByText('Built for your style');
    expect(screen.getByText('Wear it your way')).toBeInTheDocument();
  });

  it('should render the Hero jewelery component', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    await screen.findByText('Quality and style');
    expect(screen.getByText('Quality and style')).toBeInTheDocument();
  });

  it('should render the Hero electronics component', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    await screen.findByText('Tech meets design');
    expect(screen.getByText('Tech meets design')).toBeInTheDocument();
  });

  it('should render the ScrolledTicker component', async () => {
    render(
      <MemoryRouter>
        <HomePage>
          <ScrolledTicker />
        </HomePage>
      </MemoryRouter>
    );
    await screen.findByText('Online shopping not your thing?', { exact: false });
  });

  it('ScrolledTicker content should translateX when scrolling', async () => {
    render(
      <MemoryRouter>
        <HomePage>
          <ScrolledTicker />
        </HomePage>
      </MemoryRouter>
    );
    // Asegúrate de que el componente se ha renderizado correctamente
    expect(screen.getByText('Online shopping not your thing?', { exact: false })).toBeInTheDocument();

    // Simula un evento de scroll en la ventana
    act(() => {
      window.scrollY = 3000; // Ejemplo de valor de scroll, ajusta según necesidad
      window.dispatchEvent(new Event('scroll'));
    });
    
    // Espera a que el componente se actualice tras el scroll
    await userEvent.type(screen.getByText('Online shopping not your thing?', { exact: false }), ' ');

    // Verifica el cambio de estilo tras el scroll
    const scrolledTickerContent = screen.getByText('Online shopping not your thing?', { exact: false });
    const valorEsperado = 65 - (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100; // Ajusta según el cálculo que realices en tu componente
    expect(scrolledTickerContent.style.transform).toBe(`translateX(${valorEsperado}vw)`);
  });

  it('should render the Stores component in its initial state', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    await screen.findByText('Where all started');
    expect(screen.getByText('Where all started')).toBeInTheDocument();
  });

  it('Stores component should change its state when other option is selected in the select element', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    await screen.findByText('Where all started');
    const selectElement = screen.getByRole('combobox');
    expect(selectElement.value).toBe('Boston');
    await userEvent.selectOptions(selectElement, 'Chicago');
    expect(selectElement.value).toBe('Chicago');
    expect (screen.getByText('Our second home')).toBeInTheDocument();
  });
});