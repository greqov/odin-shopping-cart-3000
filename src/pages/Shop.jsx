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

  // TODO: get data from fetch
  const productsCards = data.map((product) => (
    <ProductCard key={product.id} product={product} onClick={addToCart} />
  ));

  return (
    <>
      <h1>Such shop page!</h1>
      {data.length > 0 ? (
        <div className="grid gap-4 products-cards">
          {productsCards}
        </div>
      ) : (
        'Loading products...'
      )}
    </>
  );
}

export default Shop;
