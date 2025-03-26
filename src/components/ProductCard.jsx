import { useState } from 'react';
import Quantity from './Quantity';

function ProductCard({ image = '/no-photo.png', title, price = 0, onClick }) {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
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
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Quantity
        quantity={quantity}
        onChange={onChange}
        onDecrease={decreaseQuantity}
        onIncrease={increaseQuantity}
      />
      <button type="button" onClick={onClick}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
