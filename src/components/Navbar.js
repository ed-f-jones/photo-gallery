import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
            <nav className="nav">
                <h4 className="logo">fuquinn</h4>
                
                <ul className="nav-items">
                    <Link to="/" className="nav-links">
                        <li>home</li>
                    </Link>

                    <Link to="/about" className="nav-links">
                        <li>about</li>
                    </Link>

                    <Link to="/gallery" className="nav-links">
                        <li>gallery</li>
                    </Link>

                    <Link to="/contact" className="nav-links">
                        <li>contact</li>
                    </Link>
                </ul>
            </nav>   
    )
}

export default Navbar
