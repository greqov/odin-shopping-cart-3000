import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import Header from './Header';

describe('Header component', () => {
  it('has navigation links', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: Header
      }
    ]);

    render(<Stub initialEntries={['/']} />);

    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /cart/i })).toBeInTheDocument();
  });
});
