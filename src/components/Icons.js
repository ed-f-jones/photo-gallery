import React from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

function Icons() {
    return (
        <div className="icon-container">
            <Link><FaFacebook/></Link>
            <Link><FaInstagram/></Link>
        </div>
    )
}

export default Icons
