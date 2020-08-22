import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Banner from '../components/Banner';

function Home() {
    
    return (
        <>
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
