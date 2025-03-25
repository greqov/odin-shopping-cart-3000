import { Link } from 'react-router';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <h1>Such shop</h1>
    <Link to="/shop">go shopping</Link>
  </Layout>
);

export default Home;
