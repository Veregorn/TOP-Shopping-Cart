import '../styles/Header.css'
import { Link } from 'react-router-dom'
import CategoriesMenu from './CategoriesMenu';

function Header() {
    return (
        <div className="header">
            <div id="logo">
                <Link to="/">SHOPPING CART</Link>
            </div>
            <CategoriesMenu />
        </div>
    );
}

export default Header;