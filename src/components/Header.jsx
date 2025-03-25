import { Link } from 'react-router';

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
              <Link to="/shopping-cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
