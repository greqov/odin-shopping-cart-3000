import { useOutletContext } from 'react-router';
import ProductCard from '../components/ProductCard';
import data from '../data.json';

function Shop() {
  const [cart, setCart] = useOutletContext();

  function addToCart(data) {
    const index = cart.findIndex((item) => item.product.id === data.product.id);

    if (index === -1) {
      setCart([...cart, data]);
    } else {
      const arr = [...cart];
      arr[index].quantity += data.quantity;
      setCart(arr);
    }
  }

  const productsCards = data.map((product) => (
    <ProductCard key={product.id} product={product} onClick={addToCart} />
  ));

  return (
    <>
      <h1>Such shop page!</h1>
      <div className="flex gap-2">{productsCards}</div>
    </>
  );
}

export default Shop;
