import '../styles/Stores.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Stores() {

    const [store, setStore] = useState('Boston');

    const handleSelectedStore = (event) => {
        setStore(event.target.value);
    }

    let source = '../../public/images/boston-store.webp';

    if (store == 'Boston') {
        source = '../../public/images/boston-store.webp';
    } else if (store == 'Chicago') {
        source = '../../public/images/chicago-store.jpg';
    } else if (store == 'London') {
        source = '../../public/images/london-store.jpg';
    } else if (store == 'Los Angeles') {
        source = '../../public/images/los-angeles-store.jpg';
    } else if (store == 'New York City') {
        source = '../../public/images/new-york-store.jpg';
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
                    <img src="../../public/icons/right-arrow.svg" alt="Right Arrow" />
                </div>
            </div>
            <div className='right-side'>
                <img className='stores-img' src={source} alt="Stores" />
            </div>
        </div>
    );
}

export default Stores;