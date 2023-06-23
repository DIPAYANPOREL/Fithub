import React from 'react';
import "./Hero.css";
import Header from '../header/Header';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>

            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the city</span>
            </div>
        </div>
        <div className="right-h">Right side</div>
    </div>
  )
};

export default Hero