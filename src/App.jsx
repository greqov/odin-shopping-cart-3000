import { Link } from 'react-router';

const App = () => (
  <>
    <h1>Such shop</h1>
    <Link to={{ pathname: '/shop' }}>go shopping</Link>
  </>
);

export default App;
