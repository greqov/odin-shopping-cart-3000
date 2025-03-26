import { preventBadSymbols } from '../utils/preventBadSymbols';

function Quantity({ quantity, onChange, onDecrease, onIncrease }) {
  return (
    <div className="quantity">
      <button type="button" onClick={onDecrease}>
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
      <button type="button" onClick={onIncrease}>
        +
      </button>
    </div>
  );
}

export default Quantity;
