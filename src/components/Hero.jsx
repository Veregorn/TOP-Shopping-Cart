import '../styles/Hero.css'
import PropTypes from 'prop-types';

function Hero({
    imageSrc,
    imageAlt,
    title,
    subtitle,
    buttonLink,
    buttonText
}) {
    return (
        <div className="hero">
            <div className='left-side'>
                <img className='hero-img' src={imageSrc} alt={imageAlt} />
            </div>
            <div className='right-side'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button onClick={buttonLink}>{buttonText}</button>
            </div>
        </div>
    );
}

Hero.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default Hero;