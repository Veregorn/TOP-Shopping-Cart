import '../styles/Header.css'
import { Link } from 'react-router-dom'
import CategoriesMenu from './CategoriesMenu';
import ShopControlBar from './ShopControlBar';
import propTypes from 'prop-types'

function Header({ numOfProductsInCart }) {
    return (
        <div className="header">
            <div id="logo">
                <Link to="/">JEWM</Link>
            </div>
            <CategoriesMenu />
            <ShopControlBar numOfProductsInCart={numOfProductsInCart} />
        </div>
    );
}

Header.propTypes = {
    numOfProductsInCart: propTypes.number.isRequired
}

export default Header;