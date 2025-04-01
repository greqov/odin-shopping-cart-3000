import { useOutletContext } from 'react-router';
import CartItem from '../components/CartItem';

function ShoppingCart() {
  const [cart, setCart] = useOutletContext();

  const cartItems = cart.map(({ product, quantity }) => (
    <CartItem key={product.id} product={product} quantity={quantity} />
  ));

  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <>
          <p>Cart is empty</p>
        </>
      ) : (
        <div className="flex flex-col gap-2">{cartItems}</div>
      )}
    </>
  );
}

export default ShoppingCart;
