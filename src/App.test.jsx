import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from './App';
import { expect } from 'vitest';

describe('App component', () => {
  it('renders correct heading', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: App
      }
    ]);

    render(<Stub initialEntries={['/']} />);

    expect(screen.getByRole('heading').textContent).toMatch(/such shop/i);
  });

  it('has link to a "Shop" page', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: App
      }
    ]);

    render(<Stub initialEntries={['/']} />);

    expect(screen.getByText(/go shopping/i)).toBeInTheDocument();
  });
});
