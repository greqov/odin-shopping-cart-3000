import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Quantity from './Quantity';

describe('Quantity component', () => {
  it('has input field with item quantity', () => {
    const quantity = 3;
    render(<Quantity quantity={quantity} />);

    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value', quantity.toString());
  });

  it('shows 1 item by default', () => {
    render(<Quantity />);

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('value', '1');
  });

  it('has decrease/increase buttons', async () => {
    const user = userEvent.setup();
    const onIncrease = vi.fn(() => 0);
    const onDecrease = vi.fn(() => 0);

    render(<Quantity onDecrease={onDecrease} onIncrease={onIncrease} />);

    const decreaseButton = screen.getByRole('button', { name: /\-/i });
    const increaseButton = screen.getByRole('button', { name: /\+/i });
    expect(decreaseButton).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();

    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(decreaseButton);

    expect(onIncrease).toHaveBeenCalledTimes(2);
    expect(onDecrease).toHaveBeenCalledTimes(1);
  });
});
