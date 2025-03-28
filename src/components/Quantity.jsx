import { preventBadSymbols } from '../utils/preventBadSymbols';

function Quantity({ quantity = 1, onChange }) {
  const btnClassName =
    'px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800';

  function onDecrease() {
    if (+quantity > 1) {
      onChange(+quantity - 1);
    }
  }

  function onIncrease() {
    onChange(+quantity + 1);
  }

  function onInputChange(e) {
    let value = e.target.value;
    value === '' ? onChange('') : onChange(+value);
  }

  return (
    <div className="quantity">
      <button type="button" onClick={onDecrease} className={btnClassName}>
        -
      </button>
      <input
        type="number"
        name="productQuantity"
        min="1"
        step="1"
        value={quantity}
        onChange={onInputChange}
        onKeyDown={preventBadSymbols}
      />
      <button type="button" onClick={onIncrease} className={btnClassName}>
        +
      </button>
    </div>
  );
}

export default Quantity;
