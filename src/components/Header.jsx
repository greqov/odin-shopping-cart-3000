import { Link } from 'react-router';
import CartIcon from './CartIcon';

function Header({ total }) {
  return (
    <header className="mb-5 px-8 py-4 border-b">
      <div className="w-full max-w-6xl mx-auto flex items-center gap-2">
        <Link to="/">Home</Link>
        <nav className="grow">
          <ul className="flex items-center gap-2">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li className="ml-auto mr-2.5">
              <CartIcon to="/shopping-cart" total={total} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
