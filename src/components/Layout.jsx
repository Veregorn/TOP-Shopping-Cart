import '../styles/Layout.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Promotion from './Promotion.jsx'
import { Outlet } from 'react-router-dom'
import propTypes from 'prop-types'

function Layout({ numOfProductsInCart }) {
    return (
        <>
            <Header numOfProductsInCart={numOfProductsInCart} />
            <Outlet /> {/* Here is rendered the content depending on the route */}
            <Promotion />
            <Footer />
        </>
    );
}

Layout.propTypes = {
    numOfProductsInCart: propTypes.number.isRequired
}

export default Layout;