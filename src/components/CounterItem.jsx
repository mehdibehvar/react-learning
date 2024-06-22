// src/components/CounterItem.js
import React, { useContext } from 'react';
import { cartStore, cartActionType } from '../contexts/cartStore';
import { FaTrashAlt } from 'react-icons/fa';

const CounterItem = ({ product }) => {
  const { state, dispatch } = useContext(cartStore);
  const itemInCart =state.cartItems ? state.cartItems.filter(item => item.id == product.id):[] ;

  const handleDecrease = () => {
    if (itemInCart.length > 1) {
      dispatch({ type: cartActionType.decrease, payload: product });
    } else {
      dispatch({ type: cartActionType.remove, payload: product});
    }
  };

  const handleIncrease = () => {
    dispatch({ type: cartActionType.add, payload: product });
  };

  const handleRemove = () => {
    dispatch({ type: cartActionType.remove, payload: product });
  };

  return (
    <div className="flex items-center ml-4">
      {itemInCart.length === 1 ? (      <button 
          className="text-gray-700 font-bold py-2 px-4" 
          onClick={handleRemove}
        >
          <FaTrashAlt />
        </button>

      ) : (
        <button 
        className="text-gray-700 font-bold py-2 px-4" 
        onClick={handleDecrease}
      >
        -
      </button>
      )}
      <span className="text-gray-700 mx-2">{itemInCart.length}</span>
      <button 
        className="text-gray-700 font-bold py-2 px-4" 
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default CounterItem;
