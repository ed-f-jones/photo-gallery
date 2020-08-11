import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
    AOS.init();
    return (
        <section className="home-container">
            <div className="home-hero">
                <div className="hero-container">
                    <h1 className="home-title">
                        Welcome to photography
                        <span className="home-subtitle"> By Fuquinn</span>
                    </h1>
                </div>
            </div>

            <div classame="card-container">
                <div className="cards">

                </div>

                <div className="cards">

                </div>

                <div className="cards">

                </div>
            </div>
        </section>
    )
}

export default Home;
