// src/components/CartItem.js
import React, { useContext } from 'react';
import { cartStore, cartActionType } from '../contexts/cartStore';
import { FaTrashAlt } from 'react-icons/fa';

const CartItem = ({ product }) => {
  const { dispatch } = useContext(cartStore);

  const handleDecrease = () => {
    dispatch({ type: cartActionType.decrease, payload: product });
  };

  const handleIncrease = () => {
    dispatch({ type: cartActionType.add, payload: product });
  };

  const handleRemove = () => {
    dispatch({ type: cartActionType.remove, payload: product });
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
      <div className="flex flex-col">
        <span className="font-bold">{product.title}</span>
        <span className="text-gray-600">${product.price}</span>
      </div>
      <div className="flex items-center">
        <button 
          onClick={handleDecrease}
          className="text-gray-700 font-bold py-2 px-4"
        >
          {product.qty > 1 ? '-' : <FaTrashAlt />}
        </button>
        <span className="text-gray-700 mx-2">{product.qty}</span>
        <button 
          onClick={handleIncrease}
          className="text-gray-700 font-bold py-2 px-4"
        >
          +
        </button>
        {product.qty === 1 && (
          <button 
            onClick={handleRemove}
            className="text-red-700 font-bold py-2 px-4"
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
