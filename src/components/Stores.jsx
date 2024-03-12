import '../styles/Stores.css'
import { Link } from 'react-router-dom'

function Stores() {
    return (
        <div className="stores">
            <div className='left-side'>
                <div className='store-vertical-selector'>
                    <form>
                        <select id="storeSelector" name="storeSelector">
                            <option value="boston">Boston</option>
                            <option value="chicago">Chicago</option>
                            <option value="london">London</option>
                            <option value="losAngeles">Los Angeles</option>
                            <option value="newYorkCity">New York City</option>
                        </select>
                    </form>
                </div>
                <h1>Find a store near you</h1>
                <p>Our stores are located in the most important cities in the world. Visit us and check out our products in real life.</p>
                <div className='time-table'>
                    <h2>Opening hours</h2>
                    <p><strong>Monday to Friday:</strong> 10am - 8pm</p>
                    <p><strong>Saturday:</strong> 10am - 6pm</p>
                    <p><strong>Sunday:</strong> 12pm - 5pm</p>
                </div>
                <div className='store-details-link'>
                    <Link to='/storeDetails'>See store details</Link>
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