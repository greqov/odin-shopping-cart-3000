import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  // remove this test?
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByText(/such header/i)).toBeInTheDocument();
  });

  it('has navigation', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /cart/i })).toBeInTheDocument();
  });
});
