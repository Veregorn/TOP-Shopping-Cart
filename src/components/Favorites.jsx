import '../styles/Favorites.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ensureTwoDecimalPlaces } from '../utils';

function Favorites() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4', {mode: 'cors'})
            .then((response) => {
                if (response.status >= 400) {
                throw new Error("Server error")
            }
                return response.json()
            })
            .then((response) => setProducts(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="favorites">
            <h2>A few of our</h2>
            <h1>FAVORITES</h1>
            <div className="products">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product" data-testid="product">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${ensureTwoDecimalPlaces(product.price)}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Favorites;