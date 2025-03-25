import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'shop',
    element: <Shop />
  },
  {
    path: 'shopping-cart',
    element: <ShoppingCart />
  }
];

export default routes;
