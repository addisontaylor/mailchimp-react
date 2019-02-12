import React from 'react'

const HeroSection = ({siteHero}) => (

    <div className="HeroContent">
      <div className="HeaderText">
        <h1>Your business was born for this</h1>
        <p>Become the brand you want to be with smarter marketing built for big things.</p>
        <NavLink to="/about">About</NavLink>
      </div>
    <div className="HeroContentRight"><img src={require('../images/hero-animated.gif')} /></div>
    </div>
)

export default HeroSection