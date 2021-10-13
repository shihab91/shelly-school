import React from 'react';
import img from '../../images/banner-img.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center py-5">
            <div className="hero-text  ">
                <h1>The Smartest Way <br /> to Learn  <span>Anything</span> this is shihab shumon</h1>
                <small>Partly that's due to the additional context created; if you test yourself and answer incorrectly, not only are you more likely to remember the right answer after you look it up... you'll also remember that you didn't remember. (Getting something wrong is a great way to remember it the next time, especially if you tend to be hard on yourself.)
                </small>
            </div>
            <div className="hero-img d-none d-lg-block">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Hero;