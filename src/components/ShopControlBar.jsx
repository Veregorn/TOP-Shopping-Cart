import UserAuth from "./UserAuth";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import '../styles/ShopControlBar.css';
import propTypes from 'prop-types';

function ShopControlBar({ numOfProductsInCart }) {
    return (
        <div className="shopControlBar">
            <UserAuth />
            <SearchBar />
            <ShoppingCart numOfProductsInCart={numOfProductsInCart} />
        </div>
    );
}

ShopControlBar.propTypes = {
    numOfProductsInCart: propTypes.number.isRequired
}

export default ShopControlBar;