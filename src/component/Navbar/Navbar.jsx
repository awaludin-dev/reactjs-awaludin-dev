import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav>
            <ul className="ul-navbar">
                <li className="li-navbar"><Link to="/" className="a active">Home</Link></li>
                <li className="li-navbar"><Link to="/news" className="a">News</Link></li>
                <li className="li-navbar"><Link to="/count" className="a">Count</Link></li>
                <li className="li-navbar"><Link to="/predict" className="a">Predict Gender</Link></li>
            </ul>
        </nav>
    )
}