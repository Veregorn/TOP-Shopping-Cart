import '../styles/CategoriesMenu.css'
import { Link } from 'react-router-dom'

function CategoriesMenu() {
    return (
        <div className="categoriesMenu">
            <ul>
                <li><Link to="productList/mensClothing">Men&apos;s Clothing</Link></li>
                <li><Link to="productList/womensClothing">Women&apos;s Clothing</Link></li>
                <li><Link to="productList/jewelery">Jewelery</Link></li>
                <li><Link to="productList/electronics">Electronics</Link></li>
            </ul>
        </div>
    );
}

export default CategoriesMenu;