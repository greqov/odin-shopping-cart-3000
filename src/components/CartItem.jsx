function CartItem({ product, quantity }) {
  return <>{`${product.title}, ${quantity}`}</>;
}

export default CartItem;
