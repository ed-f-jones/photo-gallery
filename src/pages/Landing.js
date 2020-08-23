import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Icons from '../components/Icons';


function Landing() {
    return (
        <>
        <header className="landing-page">
            <Icons/>
            <Banner title="edward jones" subtitle="photographer">
                <br/>
                <Link to="/home" className="landing-btn-primary">enter site</Link>
            </Banner>
        </header>
        </>
    )
}

export default Landing
