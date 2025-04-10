import { Link } from 'react-router';

function CartIcon({ to = '', total }) {
  return (
    <Link
      to={to}
      title="Go to shopping cart"
      className="relative flex items-center p-2 border border-zinc-600 rounded-full"
    >
      {total > 0 && (
        <span
          className="absolute z-1 top-[-6px] left-full flex items-center justify-center min-w-[20px] min-h-[20px] ml-[-13px] p-0.5 pt-[1px] pb-[3px] bg-zinc-800 text-xs rounded-full leading-none"
          aria-label="Quantity of products"
        >
          {total}
        </span>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative top-[1px]"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    </Link>
  );
}

export default CartIcon;
