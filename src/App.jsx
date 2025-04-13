import { useState } from 'react';
import { Outlet } from 'react-router';
import Layout from './components/Layout';

function App() {
  const [cart, setCart] = useState([]);

  const totalQuantity = cart.reduce(
    // multiply by 1 to avoid '', '1' like cases
    // when entering a quantity in input
    (acc, curr) => acc + (curr.quantity * 1),
    0
  );

  return (
    <Layout total={totalQuantity}>
      <Outlet context={[cart, setCart]} />
    </Layout>
  );
}

export default App;
