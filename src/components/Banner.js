import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner({children, title, subtitle}) {
    AOS.init();
    return (
        <div data-aos="fade-up" data-aos-duration="1500">
             <h2>{title}</h2>
            <h4>{subtitle}</h4>
             {children}
        </div>
    )
}

export default Banner
