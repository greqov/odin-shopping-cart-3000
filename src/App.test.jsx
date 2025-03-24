import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from './App';
import Shop from './Shop';
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

  it('has link to a "Shop" page', async () => {
    const user = userEvent.setup();
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: App
      },
      {
        path: '/shop',
        Component: Shop
      }
    ]);

    render(<Stub initialEntries={['/']} />);

    const link = screen.getByText(/go shopping/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/shop');

    // move 'click' action to a separate test?
    await user.click(link);
    expect(
      screen.getByRole('heading', { name: /such shop page!/i })
    ).toBeInTheDocument();
  });
});
