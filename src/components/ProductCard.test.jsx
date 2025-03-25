import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  it('has image and title', () => {
    const image = '/crorodile.png';
    const title = 'Crocodile';

    render(<ProductCard title={title} image={image} />);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: title })).toBeInTheDocument();
  });

  it('can show default image', () => {
    const title = 'Crocodile';

    render(<ProductCard title={title} />);

    const productImage = screen.getByRole('img', { name: title });
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', '/no-photo.png');
  });
});
