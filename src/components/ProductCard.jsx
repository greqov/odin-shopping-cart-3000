import { useState } from 'react';
import Quantity from './Quantity';

function ProductCard({ product, onClick }) {
  const [quantity, setQuantity] = useState(1);
  const { image = '/no-photo.png', title, price = 0 } = product;

  function onChange(quantity) {
    setQuantity(quantity);
  }

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Quantity quantity={quantity} onChange={onChange} />

      <button
        type="button"
        onClick={() => {
          quantity > 0 && onClick({ product, quantity });
        }}
        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
