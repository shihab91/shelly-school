import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="container py-3">
            <Navbar variant="light">

                <Navbar.Brand><img className="header-logo" src={img} alt="" /></Navbar.Brand>
                <Nav className="me-auto ms-4 navMenu">
                    <NavLink className="mx-4  navItems" to="/home">Home</NavLink>
                    <NavLink className="mx-4  navItems" to="/teachers">Teachers</NavLink>
                    <NavLink className="mx-4  navItems" to="/AllCourses">Courses</NavLink>
                    <NavLink className="mx-4  navItems" to="/about">About us</NavLink>
                </Nav>
                <Nav>
                    <NavLink to="/"><i class="fab icons fa-facebook"></i></NavLink>
                    <NavLink to="/"><i class="fab icons fa-instagram"></i></NavLink>
                    <NavLink to="/"><i class="fab icons fa-linkedin"></i></NavLink>
                </Nav>
            </Navbar>
            <hr />
        </div>
    );
};

export default Header;