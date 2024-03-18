import '../styles/ShoppingCart.css'
import CartIcon from '../../public/icons/shopping-bag-black-icon.svg'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

function ShoppingCart({ numOfProductsInCart }) {
    return (
        <Link to="/cart" className="shoppingCart">
            <div className="cartCount">
                <img src={CartIcon} alt="cart icon" />
                <span>{numOfProductsInCart}</span>
            </div>
        </Link>
    );
}

ShoppingCart.propTypes = {
    numOfProductsInCart: propTypes.number.isRequired
}

export default ShoppingCart;