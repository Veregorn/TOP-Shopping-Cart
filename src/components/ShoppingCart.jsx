import '../styles/ShoppingCart.css'
import CartIcon from '../../public/icons/shopping-bag-black-icon.svg'
import { Link } from 'react-router-dom'

function ShoppingCart() {
    return (
        <Link to="/cart" className="shoppingCart">
            <div className="cartCount">
                <img src={CartIcon} alt="cart icon" />
                <span>0</span>
            </div>
        </Link>
    );
}

export default ShoppingCart;