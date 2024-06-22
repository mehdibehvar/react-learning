import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartStore } from '../../contexts/cartStore';

const CartIcon = () => {
    const {state,dispatch}=useContext(cartStore);

  return (
    <div className="relative">
    <Link to="/cart" className="text-white hover:text-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 7h12.8M7 13h10l-1.4 7H8.4M9 21a2 2 0 104 0h-4z" />
      </svg>
      {state.qty > 0 && (
        <span className="absolute -top-3 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {state.qty}
        </span>
      )}
    </Link>
  </div>
  )
}

export default CartIcon