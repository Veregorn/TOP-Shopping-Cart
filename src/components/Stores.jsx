import '../styles/Stores.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import bostonImg from '../../public/images/boston-store.webp'
import chicagoImg from '../../public/images/chicago-store.jpg'
import londonImg from '../../public/images/london-store.jpg'
import losAngelesImg from '../../public/images/los-angeles-store.jpg'
import newYorkImg from '../../public/images/new-york-store.jpg'
import rightArrow from '../../public/icons/right-arrow.svg'

function Stores() {

    const [store, setStore] = useState('Boston');

    const handleSelectedStore = (event) => {
        setStore(event.target.value);
    }

    return (
        <div className="stores">
            <div className='left-side'>
                <div className='store-vertical-selector'>
                    <select id="storeSelector" name="storeSelector" value={store} onChange={handleSelectedStore}>
                        <option value="Boston">Boston</option>
                        <option value="Chicago">Chicago</option>
                        <option value="London">London</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="New York City">New York City</option>
                    </select>
                </div>
                {store == 'Boston' && <h1>Where all started</h1> || store == 'Chicago' && <h1>Our second home</h1> || store == 'London' && <h1>Our European square</h1> || store == 'Los Angeles' && <h1>Our sunny place</h1> || store == 'New York City' && <h1>Our big store</h1>}
                {store == 'Boston' && <p>10 Bond St., Boston, BT 10012</p> || store == 'Chicago' && <p>10 Mc Yellow St., Chicago, CH 45498</p> || store == 'London' && <p>123 Curry Chicken St., London, LN 23621</p> || store == 'Los Angeles' && <p>234 Melrose Place Av., Los Angeles, LA 90210</p> || store == 'New York City' && <p>59 St., New York City, NY 33226</p>}
                <div className='time-table'>
                    <h2>Opening hours</h2>
                    <p><strong>Monday to Friday:</strong> 10am - 8pm</p>
                    <p><strong>Saturday:</strong> 10am - 6pm</p>
                    <p><strong>Sunday:</strong> 12pm - 5pm</p>
                </div>
                <div className='store-details-link'>
                    <Link to='/storeDetails'>See store details</Link>
                    <img src={rightArrow} alt="Right Arrow" />
                </div>
            </div>
            <div className='right-side'>
                <img className='stores-img' src={store == 'Boston' && bostonImg || store == 'Chicago' && chicagoImg  || store == 'London' && londonImg || store == 'Los Angeles' && losAngelesImg || store == 'New York City' && newYorkImg} alt="Stores" />
            </div>
        </div>
    );
}

export default Stores;