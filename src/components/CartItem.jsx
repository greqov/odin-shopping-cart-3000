import Quantity from './Quantity';

function CartItem({ product, quantity }) {
  const { image, title, price } = product;

  const onChange = () => {};

  return (
    <div className="flex flex-row items-center gap-4">
      <div>
        <img className="w-40" src={image} alt={title} />
        <h3>{title}</h3>
      </div>
      <p>${price}</p>
      <Quantity quantity={quantity} onChange={onChange} />
    </div>
  );
}

export default CartItem;
