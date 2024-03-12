import '../styles/Promotion.css'
import { Link } from 'react-router-dom'

function Promotion() {
    return (
        <div className="promotion">
            <div className="promotion-left">
                <h1>Free shipping on all products.</h1>
            </div>
            <div className="promotion-right">
                <p>We want you to love everything about us. Which is why we offer free returns and exchanges on unused items for the first 100 days.</p>
                <div className='promotions-link'>
                    <Link to='/promotion'>Learn More</Link>
                    <img src="../../public/icons/right-arrow-white.svg" alt="Right Arrow White" />
                </div>
            </div>
        </div>
    );
}

export default Promotion;