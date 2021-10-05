import React, { useEffect, useState } from 'react';
import { Card, Col, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Teacher.css'
const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./Teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div className="container mt-5">
            <h1>Check out our best <span>Teachers</span></h1>
            <Row xs={2} md={4} className="g-4">
                {
                    teachers.slice(0, 4).map((teacher) =>
                        <Col>
                            <Card className="teacher-card">
                                <Card.Img className="card-img" variant="top" src={teacher.img} />
                                <div className="d-flex flex-row justify-content-center teacher-icon">
                                    <NavLink to="/"><i className="fab icons fa-facebook"></i></NavLink>
                                    <NavLink to="/"><i className="fab icons fa-instagram"></i></NavLink>
                                    <NavLink to="/"><i className="fab icons fa-linkedin"></i></NavLink>
                                </div>

                                <Card.Body className="teacher-card-text">
                                    <p>{teacher.name}</p>
                                    <small>{teacher.designation}</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Link to="/teachers">
                <button className="border rounded-pill mt-5 view-all-btn">view all<i className="fas ms-2 fs-4 fa-arrow-alt-circle-right "></i></button>
            </Link>
        </div>
    );
};

export default Teachers;