import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient/httpClient';
import Loading from '../components/common/Loading';
import ProductsList from '../components/ProductsList';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

  return (
    <div className="products-container p-5 mt-8">
      {loading ? <Loading fullPage={true} /> : <ProductsList products={products} />}
    </div>
  );
};

export default Products;
