import { useOutletContext } from 'react-router';
import CartItem from '../components/CartItem';

function ShoppingCart() {
  const [cart, setCart] = useOutletContext();

  const updateCart = (data) => {
    let arr = [];

    if (data.quantity === 0) {
      arr = [...cart].filter((item) => item.product.id !== data.product.id);
    } else {
      const index = cart.findIndex(
        (item) => item.product.id === data.product.id
      );

      arr = [...cart];
      arr[index].quantity = data.quantity;
    }

    setCart(arr);
  };

  const cartItems = cart.map(({ product, quantity }) => (
    <CartItem
      key={product.id}
      product={product}
      quantity={quantity}
      onChange={updateCart}
    />
  ));

  const total = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.product.price,
    0
  );

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
      <div className="my-3 text-2xl">Total: <b>${total}</b></div>
    </>
  );
}

export default ShoppingCart;
