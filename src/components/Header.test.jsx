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

    expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument();
  });

  it('shows total quantity of goods in cart icon', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: () => <Header total={7} />
      }
    ]);

    render(<Stub initialEntries={['/']} />);

    expect(screen.getByText('7')).toBeInTheDocument();
  });
});
