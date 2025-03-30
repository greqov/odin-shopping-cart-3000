import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart component', () => {
  it('renders correct heading', () => {
    const Stub = createRoutesStub([
      {
        path: '/shopping-cart',
        Component: ShoppingCart
      }
    ]);

    render(<Stub initialEntries={['/shopping-cart']} />);

    expect(screen.getByRole('heading').textContent).toMatch(/shopping cart/i);
  });
});
