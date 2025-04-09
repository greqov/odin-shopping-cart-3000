import { useOutletContext } from 'react-router';
import CartItem from '../components/CartItem';

function ShoppingCart() {
  const [cart, setCart] = useOutletContext();

  const updateCart = (data) => {
    const index = cart.findIndex((item) => item.product.id === data.product.id);

    // do we need this if() check?
    if (index !== -1) {
      const arr = [...cart];
      arr[index].quantity = data.quantity;
      setCart(arr);
    }
  };

  const cartItems = cart.map(({ product, quantity }) => (
    <CartItem
      key={product.id}
      product={product}
      quantity={quantity}
      onChange={updateCart}
    />
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
