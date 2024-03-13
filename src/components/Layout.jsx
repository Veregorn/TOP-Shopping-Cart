import '../styles/Layout.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Promotion from './Promotion.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet /> {/* Here is rendered the content depending on the route */}
            <Promotion />
            <Footer />
        </>
    );
}

export default Layout;