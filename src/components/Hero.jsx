import '../styles/Hero.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import newProductsImg from '../../public/images/new-products-hero.webp'

function Hero({
    imageAtLeft,
    // imageSrc,
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
                {imageAtLeft ? <img className='hero-img' src={newProductsImg} alt={imageAlt} /> : 
                    <div className='hero-content'>
                        <h2>{subtitle}</h2>
                        <h1>{title}</h1>
                        <p>{caption}</p>
                        <Link to={buttonLink}>{buttonText}</Link>
                    </div>
                }
            </div>
            <div className='right-side'>
                {!imageAtLeft ? <img className='hero-img' src={newProductsImg} alt={imageAlt} /> :
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
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default Hero;