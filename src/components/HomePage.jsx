import '../styles/HomePage.css'
import Hero from './Hero.jsx'
import Favorites from './Favorites.jsx'
import PrimaryCategories from './PrimaryCategories.jsx'
import ScrolledTicker from './ScrolledTicker.jsx'
import Stores from './Stores.jsx'

function HomePage() {

    const newProductsImgSrc = '../../public/images/new-products-hero.webp'
    const newProductsImgAlt = 'New products'
    const newProductsTitle = 'NEW AROUND HERE'
    const newProductsSubtitle = ''
    const newProductsCaption = 'Check out our latest products. We have something fresh for you this season.'
    const newProductsButtonLink = '/productList'
    const newProductsButtonText = 'SHOP NOW'

    const primaryCategoriesSubtitle = 'Built for your style'
    const primaryCategoriesTitle = 'Wear it your way'
    const primaryCategoriesCaption = 'Best materials, best designs. You can find the best products for your style. Check out our primary categories.'
    const primaryCategoriesImgSrc = '../../public/images/primary-cats-img.webp'
    const primaryCategoriesImgAlt = 'Primary categories'

    const secondaryCategoriesSubtitle = 'BETTER BY DESIGN'
    const secondaryCategoriesTitle = 'Quality and style'
    const secondaryCategoriesCaption = 'Unveiling the Elegance: A Timeless Collection of Exquisite Jewels that Radiate with Unmatched Brilliance and Craftsmanship.'
    const secondaryCategoriesImgSrc = '../../public/images/secondary-cat.webp'
    const secondaryCategoriesImgAlt = 'Secondary categories'
    const secondaryCategoriesButtonLink = '/productList/jewelery'
    const secondaryCategoriesButtonText = 'SHOP JEWELERY'

    const tertiaryCategoriesSubtitle = 'BEAUTY IN EVERY DETAIL'
    const tertiaryCategoriesTitle = 'Tech meets design'
    const tertiaryCategoriesCaption = 'Our products are designed to be the best. We use the latest technology and the best materials to make sure you have the best experience.'
    const tertiaryCategoriesImgSrc = '../../public/images/tertiary-cat.webp'
    const tertiaryCategoriesImgAlt = 'Tertiary categories'
    const tertiaryCategoriesButtonLink = '/productList/electronics'
    const tertiaryCategoriesButtonText = 'SHOP ELECTRONICS'
  
    return (
        <div className="homePage">
            <Hero
                imageAtLeft={true} 
                imageSrc={newProductsImgSrc} 
                imageAlt={newProductsImgAlt} 
                title={newProductsTitle} 
                subtitle={newProductsSubtitle} 
                caption={newProductsCaption}
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
            <Hero
                imageAtLeft={false} 
                imageSrc={secondaryCategoriesImgSrc} 
                imageAlt={secondaryCategoriesImgAlt} 
                title={secondaryCategoriesTitle} 
                subtitle={secondaryCategoriesSubtitle} 
                caption={secondaryCategoriesCaption}
                buttonLink={secondaryCategoriesButtonLink} 
                buttonText={secondaryCategoriesButtonText}
            />
            <Hero
                imageAtLeft={true} 
                imageSrc={tertiaryCategoriesImgSrc} 
                imageAlt={tertiaryCategoriesImgAlt} 
                title={tertiaryCategoriesTitle} 
                subtitle={tertiaryCategoriesSubtitle} 
                caption={tertiaryCategoriesCaption}
                buttonLink={tertiaryCategoriesButtonLink} 
                buttonText={tertiaryCategoriesButtonText}
            />
            <ScrolledTicker />
            <Stores />
        </div>
  );
}

export default HomePage;