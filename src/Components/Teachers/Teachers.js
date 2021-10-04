import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
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
                                <Card.Body className="teacher-card-text">
                                    <p>{teacher.name}</p>
                                    <small>{teacher.designation}</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>

        </div>
    );
};

export default Teachers;