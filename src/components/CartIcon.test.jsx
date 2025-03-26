import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import CartIcon from './CartIcon';

describe('CartIcon component', () => {
  it('has a link to a shopping cart page', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: () => <CartIcon to="/cart" />
      }
    ]);

    render(<Stub initialEntries={['/']} />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/cart');
  });

  it('shows quantity of products', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: () => <CartIcon total={3} />
      }
    ]);

    render(<Stub initialEntries={['/']} />);

    expect(
      screen.queryByRole('link', { name: /quantity of products/i })
    ).toBeInTheDocument();
  });

  it('does not show quantity for empty cart', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: () => <CartIcon />
      }
    ]);

    render(<Stub initialEntries={['/']} />);

    expect(
      screen.queryByRole('link', { name: /quantity of products/i })
    ).not.toBeInTheDocument();
  });
});
