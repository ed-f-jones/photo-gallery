import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner({children, title, subtitle}) {
    AOS.init();
    return (
        <div data-aos="fade-up">
             <h3>{title}</h3>
             <h4>{subtitle}</h4>
             {children}
        </div>
    )
}

export default Banner
