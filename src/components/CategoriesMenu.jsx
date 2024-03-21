import '../styles/CategoriesMenu.css'
import { Link } from 'react-router-dom'

function CategoriesMenu() {

    const handleMenuClick = () => {
        const menu = document.querySelector('.menu')
        const smallScreenMenuLine1 = document.querySelector('#small-screen-menu-line-1')
        const smallScreenMenuLine2 = document.querySelector('#small-screen-menu-line-2')
        const smallScreenMenuLine3 = document.querySelector('#small-screen-menu-line-3')

        menu.classList.toggle('menu-active')
        smallScreenMenuLine1.classList.toggle('small-screen-menu-line-1-active')
        smallScreenMenuLine2.classList.toggle('small-screen-menu-line-2-active')
        smallScreenMenuLine3.classList.toggle('small-screen-menu-line-3-active')
    }

    return (
        <nav className="categoriesMenu">
            <ul className='menu'>
                <li><Link to="productList/men's clothing">Men&apos;s Clothing</Link></li>
                <li><Link to="productList/women's clothing">Women&apos;s Clothing</Link></li>
                <li><Link to="productList/jewelery">Jewelery</Link></li>
                <li><Link to="productList/electronics">Electronics</Link></li>
            </ul>
            <div className='small-screen-menu' onClick={handleMenuClick}>
                <div className='small-screen-menu-line' id='small-screen-menu-line-1'></div>
                <div className='small-screen-menu-line' id='small-screen-menu-line-2'></div>
                <div className='small-screen-menu-line' id='small-screen-menu-line-3'></div>
            </div>
        </nav>
    );
}

export default CategoriesMenu;