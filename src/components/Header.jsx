import { Link } from 'react-router';
import CartIcon from './CartIcon';

function Header({ total }) {
  return (
    <header className="mb-5 px-8 py-4 border-b border-zinc-600">
      <div className="w-full max-w-6xl mx-auto flex items-center gap-2">
        <Link
          className="mr-6 mt-[-7px] text-4xl font-bold hover:text-orange-400 duration-200"
          to="/"
        >
          Cute.
        </Link>
        <nav className="grow">
          <ul className="flex items-center gap-2">
            <li>
              <Link className="hover:text-orange-400 duration-200" to="/shop">
                Shop
              </Link>
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
