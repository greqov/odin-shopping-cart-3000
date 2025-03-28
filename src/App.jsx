import { useState } from 'react';
import { Outlet } from 'react-router';
import Layout from './components/Layout';

function App() {
  const [cart, setCart] = useState([]);

  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <Layout total={totalQuantity}>
      <Outlet context={[cart, setCart]} />
    </Layout>
  );
}

export default App;
