import { preventBadSymbols } from '../utils/preventBadSymbols';

function Quantity({ quantity = 1, onChange, onDecrease, onIncrease }) {
  return (
    <div className="quantity">
      <button
        type="button"
        onClick={onDecrease}
        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
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
      <button
        type="button"
        onClick={onIncrease}
        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
