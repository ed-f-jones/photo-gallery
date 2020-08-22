import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner({children, title, subtitle}) {
    AOS.init();
    return (
        <div className="banner" data-aos="fade-up" data-aos-duration="1500">
             <h1 className="title">{title}</h1>
            <h3>{subtitle}</h3>
             {children}
        </div>
    )
}

export default Banner
