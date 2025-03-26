import { Link } from 'react-router';
import CartIcon from './CartIcon';

function Header() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <nav>
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <CartIcon to="/shopping-cart" total={5} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
