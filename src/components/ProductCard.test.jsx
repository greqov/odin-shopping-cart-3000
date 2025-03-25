import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  it('has image, title, and price', () => {
    const image = '/crorodile.png';
    const title = 'Crocodile';
    const price = 8;

    render(<ProductCard title={title} image={image} price={price} />);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: title })).toBeInTheDocument();
    expect(screen.getByText(`$${price}`)).toBeInTheDocument();
  });

  it('can show default image', () => {
    const title = 'Crocodile';

    render(<ProductCard title={title} />);

    const productImage = screen.getByRole('img', { name: title });
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', '/no-photo.png');
  });
});
