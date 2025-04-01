import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter, Outlet } from 'react-router';
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

  it('shows product item if there is a product in a cart', () => {
    const cart = [
      {
        product: {
          id: 2,
          title: 'Alpaca',
          image: '/alpaca.png',
          price: 3
        },
        quantity: 2
      }
    ];
    const setCart = vi.fn(() => 0);

    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <Outlet context={[cart, setCart]}></Outlet>,
          children: [
            {
              path: 'shopping-cart',
              element: <ShoppingCart />
            }
          ]
        }
      ],
      {
        initialEntries: ['/shopping-cart']
      }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/Alpaca, 2/i)).toBeInTheDocument();
  });
});
