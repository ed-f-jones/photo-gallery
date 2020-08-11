import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    AOS.init();
    return (
        <header className="header-home">
            <div className="header-container">
                <h3 className="header-title">Welcome to Photograpy 
                <span className="header-subtitle">by Fuquinn</span></h3>
                <div className="hero-btn">
                <a href="#readmore" className="btn">readmore</a>
                </div>
            </div>
        </header>
    )
}

export default Hero
