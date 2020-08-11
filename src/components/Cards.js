import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';

function Cards() {
    AOS.init()
    return (
        <section className="card-container" id="readmore">
            <div className="card">
                <div className="card-content">
                    card
                </div>
                <div className="card-footer">
                    foot
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    card
                </div>
                <div className="card-footer">
                    foot
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    card
                </div>
                <div className="card-footer">
                    foot
                </div>
            </div>
            
        </section>
    )
}

export default Cards
