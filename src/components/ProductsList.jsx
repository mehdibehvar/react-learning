
import { useSnackbar } from 'notistack';
import '../styles/ProductsList.css';
import { Link } from 'react-router-dom';

const ProductsList = ({ products }) => {
    const { enqueueSnackbar } = useSnackbar();
    const addToCart = (product) => {
        console.log('Added to cart:', product);
        enqueueSnackbar(`${product.title} added to cart!`, { variant: 'success' });
    };
    return (
        <div className="products-list">
            {products.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className="card">
                    <img src={product.image} alt={product.title} className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">{product.title}</h3>
                        <p className="card-category">{product.category}</p>
                        <p className="card-description">{product.description}</p>
                        <p className="card-price">${product.price}</p>
                    </div>
                </Link >
            ))}
        </div>
    );
};

export default ProductsList;
