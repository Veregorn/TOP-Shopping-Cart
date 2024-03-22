import '../styles/PrimaryCategories.css'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import primaryCategoriesImg from '../../public/images/primary-cats-img.webp'
import rightArrow from '../../public/icons/right-arrow.svg'

function PrimaryCategories({
    subtitle,
    title,
    caption,
    imageAlt
}) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories', {mode: 'cors'})
            .then((response) => {
                if (response.status >= 400) {
                throw new Error("Server error")
            }
                return response.json()
            })
            .then((response) => setCategories(response))
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
        <div className="primaryCats">
            <div className='left-side'>
                <img className='primary-cats-img' src={primaryCategoriesImg} alt={imageAlt} />
            </div>
            <div className='right-side'>
                <h2>{subtitle}</h2>
                <h1>{title}</h1>
                <p>{caption}</p>
                <div className="categories">
                    {categories.map((category, index) => (
                        (index == 2 || index == 3) &&
                            <div key={index} className="category">
                                <Link to={`productList/${category}`}>{category}</Link>
                                <img src={rightArrow} alt="Right Arrow" />
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

PrimaryCategories.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired
}

export default PrimaryCategories;