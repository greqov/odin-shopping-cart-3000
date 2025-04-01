import { render, screen } from '@testing-library/react';
import {
  createRoutesStub,
  RouterProvider,
  createMemoryRouter
} from 'react-router';
import routes from '../routes';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart component', () => {
  it('renders correct heading', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/shopping-cart']
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', { name: /shopping cart/i })
    ).toBeInTheDocument();
  });

  it('shows "Empty cart" text for empty cart', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/shopping-cart']
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
  });
});
