import '../styles/Stores.css'
import { Link } from 'react-router-dom'

function Stores() {
    return (
        <div className="stores">
            <div className='left-side'>
                <div className='store-vertical-selector'>
                    <ul>
                        <li>Boston</li>
                        <li>Chicago</li>
                        <li>London</li>
                        <li>Los Angeles</li>
                        <li>New York City</li>
                    </ul>
                </div>
                <h1>Find a store near you</h1>
                <p>Our stores are located in the most important cities in the world. Visit us and check out our products in real life.</p>
                <div className='time-table'>
                    <h2>Opening hours</h2>
                    <p>Monday to Friday: 10am - 8pm</p>
                    <p>Saturday: 10am - 6pm</p>
                    <p>Sunday: 12pm - 5pm</p>
                </div>
                <div className='store-details-link'>
                    <Link to='/storeDetails'>Find out more</Link>
                    <img src="../../public/icons/right-arrow.svg" alt="Right Arrow" />
                </div>
            </div>
            <div className='right-side'>
                <img className='stores-img' src="../../public/images/london-store.webp" alt="Stores" />
            </div>
        </div>
    );
}

export default Stores;