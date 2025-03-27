import { Link } from 'react-router';
import CartIcon from './CartIcon';

function Header({ total }) {
  return (
    <>
      <header className="flex gap-2">
        <Link to="/">Home</Link>
        <nav>
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <CartIcon to="/shopping-cart" total={total} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
