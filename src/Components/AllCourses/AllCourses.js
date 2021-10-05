import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AllCourses = () => {
    const [AllCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('./Course.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <div className="container">
            <div className="text-container">
                <h1>Our best <span>courses</span></h1>
            </div>
            <Row xs={2} md={4} className="g-4">
                {
                    AllCourses.map(course =>
                        <Col>
                            <Card className="course-card" style={{ width: '270px', height: "362px", display: "inline-block" }}>
                                <Card.Img className="course-img" style={{ width: '270px', height: "180px" }} variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title className="course-name">{course.name}</Card.Title>
                                    <Card.Title className="course-time">{course.time}</Card.Title>
                                    <Card.Title className="course-trainer">Tutor : {course.trainer}</Card.Title>
                                    <i class="fas fa-shopping-cart cart-icon"></i>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>

        </div>
    );
};

export default AllCourses;