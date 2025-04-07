import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';

describe('CartItem component', () => {
  it('has image, title, price and quantity control', () => {
    const product = {
      id: 1,
      title: 'Bison',
      image: '/bison.png',
      price: 2
    };
    const quantity = 3;

    render(<CartItem product={product} quantity={quantity} />);

    expect(
      screen.getByRole('heading', { name: product.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: product.title })
    ).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByDisplayValue(quantity.toString())).toBeInTheDocument();
  });
});
