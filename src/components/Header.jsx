import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div id="logo">
                <Link to="/">VEREGORN SHOPPING CART</Link>
            </div>
        </div>
    );
}

export default Header;