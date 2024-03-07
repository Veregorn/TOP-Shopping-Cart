import '../styles/HomePage.css'
import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Favorites from './Favorites.jsx'

function HomePage() {

    const newProductsImgSrc = '../../public/images/new-products-hero.webp'
    const newProductsImgAlt = 'New products'
    const newProductsTitle = 'NEW AROUND HERE'
    const newProductsSubtitle = 'Check out our latest products. We have something fresh for you this season.'
    const newProductsButtonLink = '/productList'
    const newProductsButtonText = 'SHOP NOW'
  
    return (
        <div className="homePage">
            <Header />
            <Hero
                imageSrc={newProductsImgSrc} 
                imageAlt={newProductsImgAlt} 
                title={newProductsTitle} 
                subtitle={newProductsSubtitle} 
                buttonLink={newProductsButtonLink} 
                buttonText={newProductsButtonText} 
            />
            <Favorites />
        </div>
  );
}

export default HomePage;