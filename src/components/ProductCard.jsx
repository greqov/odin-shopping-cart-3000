import { useState } from 'react';
import Quantity from './Quantity';

function ProductCard({ image = '/no-photo.png', title, price = 0, onClick }) {
  const [quantity, setQuantity] = useState(1);

  function onDecrease() {
    if (+quantity > 1) {
      setQuantity(+quantity - 1);
    }
  }

  function onIncrease() {
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
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Quantity
        quantity={quantity}
        onChange={onChange}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />

      <button
        type="button"
        onClick={() => {
          onClick(quantity);
        }}
        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
