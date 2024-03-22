import '../styles/Hero.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import newProductsImg from '../../public/images/new-products-hero.webp'
import secondaryCategoriesImg from '../../public/images/secondary-cat.webp'
import tertiaryCategoriesImg from '../../public/images/tertiary-cat.webp'

function Hero({
    imageAtLeft,
    imageAlt,
    title,
    subtitle,
    caption,
    buttonLink,
    buttonText
}) {
    return (
        <div className="hero">
            <div className='left-side'>
                {imageAtLeft ? <img className='hero-img' src={imageAlt == 'New products' && newProductsImg || imageAlt == 'Secondary categories' && secondaryCategoriesImg || imageAlt == 'Tertiary categories' && tertiaryCategoriesImg} alt={imageAlt} /> : 
                    <div className='hero-content'>
                        <h2>{subtitle}</h2>
                        <h1>{title}</h1>
                        <p>{caption}</p>
                        <Link to={buttonLink}>{buttonText}</Link>
                    </div>
                }
            </div>
            <div className='right-side'>
                {!imageAtLeft ? <img className='hero-img' src={imageAlt == 'New products' && newProductsImg || imageAlt == 'Secondary categories' && secondaryCategoriesImg || imageAlt == 'Tertiary categories' && tertiaryCategoriesImg} alt={imageAlt} /> :
                    <div className='hero-content'>
                        <h2>{subtitle}</h2>
                        <h1>{title}</h1>
                        <p>{caption}</p>
                        <Link to={buttonLink}>{buttonText}</Link>
                    </div>
                }
            </div>
        </div>
    );
}

Hero.propTypes = {
    imageAtLeft: PropTypes.bool.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default Hero;