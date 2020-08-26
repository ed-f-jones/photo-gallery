import React from 'react';


function Hero({children, hero}){

    return (
        <header className={hero}>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero: "Hero-container"
};

export default Hero
