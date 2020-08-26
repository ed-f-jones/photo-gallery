import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
            <nav className="navbar">
                <h5>edward jones</h5>
                <ul>
                    <Link to="/home">
                        <li>home</li>
                    </Link>

                    <Link to="/about">
                        <li>about</li>
                    </Link>

                    <Link to="/gallery">
                        <li>gallery</li>
                    </Link>

                    <Link to="/contact">
                        <li>contact</li>
                    </Link>
                </ul>
            </nav>   
    )
}

export default Navbar
