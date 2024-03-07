import '../styles/Header.css'
import { Link } from 'react-router-dom'
import CategoriesMenu from './CategoriesMenu';
import ShopControlBar from './ShopControlBar';

function Header() {
    return (
        <div className="header">
            <div id="logo">
                <Link to="/">JEWM</Link>
            </div>
            <CategoriesMenu />
            <ShopControlBar />
        </div>
    );
}

export default Header;