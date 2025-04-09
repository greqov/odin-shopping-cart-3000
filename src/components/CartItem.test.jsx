import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from './CartItem';

describe('CartItem component', () => {
  it('has image, title, price and quantity control', async () => {
    const product = {
      id: 1,
      title: 'Bison',
      image: '/bison.png',
      price: 2
    };
    const quantity = 3;
    const onClick = vi.fn(() => 0);
    const user = userEvent.setup();

    render(
      <CartItem product={product} quantity={quantity} onChange={onClick} />
    );

    expect(
      screen.getByRole('heading', { name: product.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: product.title })
    ).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByDisplayValue(quantity.toString())).toBeInTheDocument();

    const increaseButton = screen.getByRole('button', { name: /\+/i });
    expect(increaseButton).toBeInTheDocument();

    await user.click(increaseButton);
    await user.click(increaseButton);

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
