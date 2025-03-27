import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import data from '../data.json';

function Shop() {
  function onClick(quantity) {
    console.log('got!', quantity);
  }

  const productsCards = data.map(({ id, title, image, price }) => (
    <ProductCard
      key={id}
      title={title}
      image={image}
      price={price}
      onClick={onClick}
    />
  ));

  return (
    <Layout>
      <h1>Such shop page!</h1>
      <div className="flex gap-2">{productsCards}</div>
    </Layout>
  );
}

export default Shop;
