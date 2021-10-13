import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className='pt-4'>
                <Container>
                    <Navbar.Brand href="#home"><img className="header-logo" src={img} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-4 navMenu">
                            <NavLink className="mx-2  navItems" to="/home">Home</NavLink>
                            <NavLink className="mx-2  navItems" to="/teachers">Teachers</NavLink>
                            <NavLink className="mx-2  navItems" to="/courses">Courses</NavLink>
                            <NavLink className="mx-2  navItems" to="/about">About us</NavLink>
                        </Nav>
                        <Nav className="d-flex flex-row justify-content-center">
                            <a target="blank" href="https://www.facebook.com/mdshihab.shumon.3"><i className="fab icons fa-facebook"></i></a>
                            <a target="blank" href="https://www.instagram.com/shihabshumon9/"><i className="fab icons fa-instagram"></i></a>
                            <a target="blank" href="https://www.linkedin.com/in/shihab-shihab-5a8202216/"> <i className="fab icons fa-linkedin"></i></a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
        </>
    );
};

export default Header;