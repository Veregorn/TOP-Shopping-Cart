import '../styles/ProductDetailsPage.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ensureTwoDecimalPlaces } from '../utils';

function ProductDetailsPage({ addToCartHandler }) {

    const { productId } = useParams();

    // State variables
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch product details
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`, { mode: 'cors' })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('Server error');
                }
                return response.json();
            })
            .then((response) => setProduct(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [productId]);

    return (
        <div className="ProductDetailsPage">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error &&
                <>
                    <div className='product-image-side'>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className='product-info-side'>
                        <div className='product-info-top'>
                            <div className='product-info-top-left'>
                                <h1>{product.title}</h1>
                                <h2>Category: {product.category}</h2>
                            </div>
                            <div className='product-info-top-right'>
                                <p>${ensureTwoDecimalPlaces(product.price)}</p>
                            </div>
                        </div>
                        <div className='product-info-bottom'>
                            <button onClick={() => addToCartHandler(product)}>Add to cart ${product.price}</button>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

ProductDetailsPage.propTypes = {
    addToCartHandler: PropTypes.func.isRequired
}

export default ProductDetailsPage;