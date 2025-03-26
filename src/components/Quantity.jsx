import { useState } from 'react';
import { preventBadSymbols } from '../utils/preventBadSymbols';

function Quantity() {
  const [quantity, setQuantity] = useState(1);

  function decreaseQauntity() {
    if (+quantity > 1) {
      setQuantity(+quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(+quantity + 1);
  }

  function onChange(e) {
    let value = e.target.value;

    if (value === '') {
      setQuantity('');
      return;
    }

    setQuantity(+value);
  }

  return (
    <div className="quantity">
      <button type="button" onClick={decreaseQauntity}>
        -
      </button>
      <input
        type="number"
        name="productQuantity"
        min="1"
        step="1"
        value={quantity}
        onChange={onChange}
        onKeyDown={preventBadSymbols}
      />
      <button type="button" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}

export default Quantity;
