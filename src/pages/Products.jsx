import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient/httpClient';
import Loading from '../components/common/Loading';
import ProductsList from '../components/ProductsList';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await get('/products');
        setProducts(response || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [update]);

  return (
    <div className="products-container p-5 mt-8">
      <div className="p-2"><button onClick={()=>setUpdate(!update)} className='border-2 text-lg p-2 mb-4'>update products</button></div>
      {loading ? <Loading fullPage={true} /> : <ProductsList products={products} />}
    </div>
  );
};

export default Products;
