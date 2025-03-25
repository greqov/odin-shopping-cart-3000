import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

function Shop() {
  return (
    <Layout>
      <h1>Such shop page!</h1>
      <ProductCard title="product title" image="/crocodile.png" price={10} />
    </Layout>
  );
}

export default Shop;
