import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

function Home() {
    
    return (
        <>
        <Navbar/>
        <Hero>
            <Banner title=" welcome to photography" subtitle=" by Fuquinn">
                <br/>
                <a href="#readmore" className="cta-btn">read more</a>
            </Banner>
        </Hero>
        <Cards/>
        </>
    )
}

export default Home;
