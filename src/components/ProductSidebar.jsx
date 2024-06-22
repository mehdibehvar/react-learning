// src/components/ProductSidebar.jsx
import React, { useContext } from 'react';
import CounterItem from './CounterItem';
import { cartActionType, cartStore } from '../contexts/cartStore';

const ProductSidebar = ({ product }) => {
  const {state,dispatch}=useContext(cartStore);
  const removeFromCart=(product)=>{
    dispatch({
      type:cartActionType.remove,
      payload:product
    })
  }
  return (
    <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Seller</span>
        <div className="flex items-center">
          <span className="text-sm text-gray-700">{product.sellerName}</span>
          <svg className="w-5 h-5 text-gray-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C5.582 2 2 5.582 2 10s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14.5c-3.589 0-6.5-2.911-6.5-6.5S6.411 3.5 10 3.5s6.5 2.911 6.5 6.5-2.911 6.5-6.5 6.5z" />
            <path d="M10 8a2 2 0 100 4 2 2 0 000-4zm0 3a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
      </div>
      <div className="text-yellow-500 mb-4">
        {product.sellerRating}% Satisfaction <span className="text-gray-500">Good Performance</span>
      </div>
      <hr className="my-4"/>
      <div className="text-2xl font-bold mb-4">Price: ${product.price}</div>
      <div className="text-red-500 mb-4">+{product.likes} people like this product</div>
      <div className="flex items-center mb-4">
        <button onClick={()=>removeFromCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Remove</button>
        <CounterItem product={product}/>
      </div>
    </div>
  );
};

export default ProductSidebar;
