import { render, screen } from '@testing-library/react';
import {
  RouterProvider,
  createMemoryRouter,
  useOutletContext
} from 'react-router';
import routes from '../routes';

vi.mock('react-router', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useOutletContext: vi.fn()
  };
});

describe('ShoppingCart component', () => {
  beforeEach(() => {
    vi.mocked(useOutletContext).mockReset();
  });

  it('renders correct heading', () => {
    const mockContext = [[], vi.fn(() => 0)];
    useOutletContext.mockReturnValue(mockContext);

    const router = createMemoryRouter(routes, {
      initialEntries: ['/shopping-cart']
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', { name: /shopping cart/i })
    ).toBeInTheDocument();
  });

  it('shows "Empty cart" text for empty cart', () => {
    const mockContext = [[], vi.fn(() => 0)];
    useOutletContext.mockReturnValue(mockContext);

    const router = createMemoryRouter(routes, {
      initialEntries: ['/shopping-cart']
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
  });

  it('shows product item if there is a product in a cart', () => {
    const mockContext = [
      [
        {
          product: {
            id: 2,
            title: 'Alpaca',
            image: '/alpaca.png',
            price: 3
          },
          quantity: 2
        }
      ],
      vi.fn(() => 0)
    ];

    useOutletContext.mockReturnValue(mockContext);

    const router = createMemoryRouter(routes, {
      initialEntries: ['/shopping-cart']
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/Alpaca, 2/i)).toBeInTheDocument();
  });
});
