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
                            <NavLink to="/"><i className="fab icons fa-facebook"></i></NavLink>
                            <NavLink to="/"><i className="fab icons fa-instagram"></i></NavLink>
                            <NavLink to="/"><i className="fab icons fa-linkedin"></i></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
        </>
    );
};

export default Header;