import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';

function Cards() {

    AOS.init()

    return (
        <section className="card-container" id="readmore">
            <div className="card">
                <img className="card-img"/>
            </div>

            <div className="card">
                <article className="card-content">
                    <h3>all about the artist</h3>
                    <p>

                    </p>
                </article>
                    <Link to="/about" className="card-footer">about</Link>
            </div>

            <div className="card">
                <article className="card-content">
                </article>
                    <Link to="/gallery" className="card-footer">gallery</Link>
            </div>

            <div className="card">
                <img className="card-img"/>
            </div>

            <div className="card">
                <article>

                </article>
                <Link to="/contact" className="card-footer">contact</Link>
            </div>

            <div className="card">
                <img class="card-img"/>
            </div>
            
        </section>
    )
}

export default Cards
