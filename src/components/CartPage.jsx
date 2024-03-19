import '../styles/CartPage.css'
import propTypes from 'prop-types'

function CartPage({cart}) {
    const arrayToRender = Object.entries(cart).map(([id, quantity]) => `${id}: ${quantity}`);

    return (
        <div className="cartPage">
            <h2>Your cart</h2>
            <ul>
                {arrayToRender.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

CartPage.propTypes = {
    cart: propTypes.object.isRequired
}

export default CartPage;