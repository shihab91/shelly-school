import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const AllTeachers = () => {
    const [AllTeachers, setAllTeachers] = useState([]);
    useEffect(() => {
        fetch('./Teachers.json')
            .then(res => res.json())
            .then(data => setAllTeachers(data))
    }, [])
    return (
        <div className="container">
            <h1>Check out our best <span>Teachers</span></h1>
            <Row xs={2} md={4} className="g-4">
                {
                    AllTeachers.map((teacher) =>
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

export default AllTeachers;