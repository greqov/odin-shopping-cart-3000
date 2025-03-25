import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'shop',
    element: <Shop />
  }
];

export default routes;
