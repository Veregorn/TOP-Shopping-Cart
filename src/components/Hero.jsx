import '../styles/Hero.css'
import PropTypes from 'prop-types';

function Hero({
    imageAtLeft,
    imageSrc,
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
                {imageAtLeft ? <img className='hero-img' src={imageSrc} alt={imageAlt} /> : 
                    <div className='hero-content'>
                        <h2>{subtitle}</h2>
                        <h1>{title}</h1>
                        <p>{caption}</p>
                        <button onClick={buttonLink}>{buttonText}</button>
                    </div>
                }
            </div>
            <div className='right-side'>
                {!imageAtLeft ? <img className='hero-img' src={imageSrc} alt={imageAlt} /> :
                    <div className='hero-content'>
                        <h2>{subtitle}</h2>
                        <h1>{title}</h1>
                        <p>{caption}</p>
                        <button onClick={buttonLink}>{buttonText}</button>
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