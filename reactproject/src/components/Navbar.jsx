import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrolled(prev => {
                if (currentScroll > 60 && !prev) return true;
                if (currentScroll < 30 && prev) return false;
                return prev;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        < header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className={`navbar-content ${scrolled ? "shrink" : ""}`}>
            <   div className="logo">
                    <Link to="/">AudsCauds</Link>
                </div>
                <nav className="nav-links">
                    <Link to="/about" className="nav-link">about</Link>
                    <Link to="/contact" className="nav-link">contact</Link>
                    <a href="https://etsy.com/shop/AudsCauds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link">shop</a>
                </nav> 
            </div>
        </header>
        
    );
}
export default Navbar;