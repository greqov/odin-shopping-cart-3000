import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import userEvent from '@testing-library/user-event';

describe('ProductCard component', () => {
  it('has image, title, price, quantity and "Add to cart" button', async () => {
    const image = '/crorodile.png';
    const title = 'Crocodile';
    const price = 8;
    const onClick = vi.fn(() => 0);
    const user = userEvent.setup();

    render(<ProductCard product={{ title, image, price }} onClick={onClick} />);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: title })).toBeInTheDocument();
    expect(screen.getByText(`$${price}`)).toBeInTheDocument();
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('can change its quantity by pressing increase/decrease buttons', async () => {
    const product = {
      image: '/crorodile.png',
      title: 'Crocodile',
      price: 8
    };
    const onClick = vi.fn(() => 0);
    const user = userEvent.setup();

    render(<ProductCard product={product} onClick={onClick} />);

    const decreaseButton = screen.getByRole('button', { name: /\-/i });
    const increaseButton = screen.getByRole('button', { name: /\+/i });
    expect(decreaseButton).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();

    expect(screen.getByDisplayValue('1')).toBeInTheDocument();

    await user.click(increaseButton);
    await user.click(increaseButton);

    expect(screen.getByDisplayValue('3')).toBeInTheDocument();

    await user.click(decreaseButton);
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
  });

  it('can show default image', () => {
    const title = 'Crocodile';

    render(<ProductCard product={{ title }} />);

    const productImage = screen.getByRole('img', { name: title });
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', '/no-photo.png');
  });
});
