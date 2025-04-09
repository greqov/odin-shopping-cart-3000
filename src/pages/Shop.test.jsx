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

describe('Shop page', () => {
  it('renders correct heading', () => {
    const mockContext = [[], vi.fn(() => 0)];
    useOutletContext.mockReturnValue(mockContext);

    const router = createMemoryRouter(routes, {
      initialEntries: ['/shop']
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', { name: /such shop page/i })
    ).toBeInTheDocument();
  });

  it.skip('shows "Loading products" message while loading products', () => {
    const mockContext = [[], vi.fn(() => 0)];
    useOutletContext.mockReturnValue(mockContext);

    const router = createMemoryRouter(routes, {
      initialEntries: ['/shop']
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/loading products/i)).toBeInTheDocument();
  });
});
