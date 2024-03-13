import '../styles/ProductListPage.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductListPage() {

    const { category } = useParams();

    // State variables
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products
    useEffect(() => {
        let url = 'https://fakestoreapi.com/products';
        if (category !== undefined) {
            url += `/category/${category}`;
        }

        fetch(url, { mode: 'cors' })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('Server error');
                }
                return response.json();
            })
            .then((response) => setProducts(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [category]);

    return (
        <div className="ProductListPage">
            <div className='subHeader'>
                {category === undefined ? <h2>All Products</h2> : <h2>{category}</h2>}
            </div>
            <div className='products'>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {products.map((product) => (
                    <div key={product.id} className='product'>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListPage;