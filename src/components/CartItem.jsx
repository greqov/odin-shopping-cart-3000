import Quantity from './Quantity';

function CartItem({ product, quantity, onChange }) {
  const { image, title, price } = product;

  const handleChange = (q) => {
    onChange({ product, quantity: q });
  };

  const handleRemove = () => {
    handleChange(0);
  };

  return (
    <div className="flex flex-row items-center gap-4">
      <div>
        <img className="w-40" src={image} alt={title} />
        <h3>{title}</h3>
      </div>
      <p>${price}</p>
      <Quantity quantity={quantity} onChange={handleChange} />
      <button
        className="cursor-pointer"
        type="button"
        title="Remove product"
        onClick={handleRemove}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
