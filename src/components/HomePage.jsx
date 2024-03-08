import '../styles/HomePage.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Favorites from './Favorites.jsx'
import PrimaryCategories from './PrimaryCategories.jsx'

function HomePage() {

    const newProductsImgSrc = '../../public/images/new-products-hero.webp'
    const newProductsImgAlt = 'New products'
    const newProductsTitle = 'NEW AROUND HERE'
    const newProductsSubtitle = 'Check out our latest products. We have something fresh for you this season.'
    const newProductsButtonLink = '/productList'
    const newProductsButtonText = 'SHOP NOW'

    const primaryCategoriesSubtitle = 'Built for your style'
    const primaryCategoriesTitle = 'Wear it your way'
    const primaryCategoriesCaption = 'Best materials, best designs. You can find the best products for your style. Check out our primary categories.'
    const primaryCategoriesImgSrc = '../../public/images/primary-cats-img.webp'
    const primaryCategoriesImgAlt = 'Primary categories'
  
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
            <PrimaryCategories
                subtitle={primaryCategoriesSubtitle}
                title={primaryCategoriesTitle}
                caption={primaryCategoriesCaption}
                imageSrc={primaryCategoriesImgSrc}
                imageAlt={primaryCategoriesImgAlt}
            />
        </div>
  );
}

export default HomePage;