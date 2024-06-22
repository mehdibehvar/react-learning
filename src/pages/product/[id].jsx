// src/pages/Product.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../utils/httpClient/httpClient";
import Loading from "../../components/common/Loading";
import ProductSidebar from "../../components/ProductSidebar";
import { cartActionType, cartStore } from "../../contexts/cartStore";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const {state,dispatch}=useContext(cartStore);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await get(`/products/${id}`);
        setProduct(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Failed to fetch product details.");
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);
  
const addToCart=()=>{
  dispatch({
    type:cartActionType.add,
    payload:product
  })
}



  if (loading) {
    return <Loading fullPage={true} />;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col gap-3 md:flex-row">
    {product && (
      <>
              <ProductSidebar product={product} />

        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-semibold mt-4">${product.price}</p>
            <p className="text-sm text-gray-600 mt-2">{product.category}</p>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </>
    )}
  </div>
  );
};

export default Product;
