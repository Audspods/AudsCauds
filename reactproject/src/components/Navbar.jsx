import { Link } from "react-router-dom";
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">AudsCauds</Link>
            </div>
            <div className="nav-links">
                <Link to="/about" className="nav-link">about</Link>
                <Link to="/contact" className="nav-link">contact</Link>
                <a href="https://www.etsy.com/shop/AudsCauds" className="nav-link">shop</a>
            </div> 
        </nav>
    );
}
export default Navbar;