import App from './App';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';

const routes = [
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'shopping-cart',
        element: <ShoppingCart />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
];

export default routes;
