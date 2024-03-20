import '../styles/CartPage.css'
import propTypes from 'prop-types'
import { ensureTwoDecimalPlaces } from '../utils';

function CartPage({cart}) {
    return (
        <div className="cartPage">
            <div className='top-cartPage'>
                <h2>Your cart</h2>
            </div>
            <div className='bottom-cartPage'>
                <div className="products-in-cart">
                    {Object.values(cart).map((product) => (
                        <div key={product.id} className="product-in-cart">
                            <div className='left-info-product'>
                                <img src={product.image} alt={product.title} />
                                <div className='quantity-control-container'>
                                    <button>-</button>
                                    <p>{product.quantity}</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className='middle-info-product'>
                                <h3>{product.title}</h3>
                                <p>{product.category}</p>
                            </div>
                            <div className='right-info-product'>
                                <button>
                                    <img src='../../public/icons/cross.svg' alt='remove' />
                                </button>
                                <h3>${ensureTwoDecimalPlaces(product.price * product.quantity)}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='resume'>
                    <p>Your order qualifies for free standard shipping!</p>
                    <div className='main-resume'>
                        <div className='left-resume'>
                            <h3>Subtotal:</h3>
                            <h3>Shipping:</h3>
                            <h3 className='total'>Total:</h3>
                        </div>
                        <div className='right-resume'>
                            <h3>${ensureTwoDecimalPlaces(Object.values(cart).reduce((acc, product) => acc + (product.price * product.quantity), 0))}</h3>
                            <h3>FREE</h3>
                            <h3 className='total-bold'>${ensureTwoDecimalPlaces(Object.values(cart).reduce((acc, product) => acc + (product.price * product.quantity), 0))}</h3>
                        </div>
                    </div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}

CartPage.propTypes = {
    cart: propTypes.object.isRequired
}

export default CartPage;