import preventBadSymbols from '../utils/preventBadSymbols';

function Quantity() {
  return (
    <div className="quantity">
      <button type="button">-</button>
      <input
        type="number"
        name="productQuantity"
        min="1"
        step="1"
        onKeyDown={preventBadSymbols}
      />
      <button type="button">+</button>
    </div>
  );
}

export default Quantity;
