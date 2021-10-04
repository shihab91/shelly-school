import React from 'react';
import { NavLink } from 'react-bootstrap';
import img from '../../images/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className="container footer">
            <div className="logo d-flex flex-column">
                <img src={img} alt="" />
                <p>We will always be there for you .  If need any <br />help just contact us .</p>
            </div>
            <div className="quick-links d-flex flex-column">
                <p>Quick Links</p>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/additional">Additional</NavLink>
            </div>
            <div className="quick-links d-flex flex-column">
                <p>More from us </p>
                <NavLink to="/">Graphic Design</NavLink>
                <NavLink to="/">UI design</NavLink>
                <NavLink to="/">Python tutorials</NavLink>
                <NavLink to="/">MERN stack web dev</NavLink>
            </div>
        </div>
    );
};

export default Footer;