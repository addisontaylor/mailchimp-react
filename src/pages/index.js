import React from 'react'
import Link from 'gatsby-link'
import SectionOne from '../components/sectionone';

const IndexPage = () => (
  <div>
      <div className="HeroContent">
      <div className="HeaderText">
        <h1>Your business was born for this</h1>
        <p>Become the brand you want to be with smarter marketing built for big things.</p>
        <Link to="/sign-up">Sign Up Free</Link>
      </div>
    <div className="HeroContentRight"><img src={require('../images/hero-animated.gif')} /></div>
    </div>
  </div>
)

export default IndexPage
