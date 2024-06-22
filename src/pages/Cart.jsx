// src/pages/Cart.js
import React, { useContext } from 'react';
import { cartStore } from '../contexts/cartStore';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { state } = useContext(cartStore);

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
      {state.cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty</p>
      ) : (
        state.cartItems.map(product => (
          <CartItem key={product.id} product={product} />
        ))
      )}
      <div className="flex justify-end mt-5">
        <h2 className="text-xl font-bold">Total: ${state.cartItems.reduce((total, item) => total + item.price * item.qty, 0)}</h2>
      </div>
    </div>
  );
};

export default Cart;
