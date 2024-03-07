import { Link } from 'react-router-dom'
import '../styles/UserAuth.css'

function UserAuth() {
    return (
        <div className="userAuth">
            <Link to="/">LOG IN</Link>
        </div>
    );
}

export default UserAuth;