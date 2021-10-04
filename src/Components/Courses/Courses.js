import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Course.css'
const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container">
            <div className="text-container">
                <h1>Our best <span>courses</span></h1>
            </div>
            <Row xs={2} md={4} className="g-4">
                {
                    courses.slice(0, 4).map(course =>
                        <Col>
                            <Card className="course-card" style={{ width: '270px', height: "362px", display: "inline-block" }}>
                                <Card.Img className="course-img" style={{ width: '270px', height: "180px" }} variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title className="course-name">{course.name}</Card.Title>
                                    <Card.Title className="course-time">{course.time}</Card.Title>
                                    <Card.Title className="course-trainer">Tutor : {course.trainer}</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>

        </div>
    );
};

export default Courses;









/*                     <div>
                    <div>
                        <img src={course.img} alt="" />
                    </div>
                    <div>
                        <h3>{course.name}</h3>
                        <p>{course.time}</p>
                        <p>Trainer: {course.trainer}</p>
                    </div>
                </div>

             <div>
                <h2>WELCOME TO <span>Shelly</span></h2>
            </div> */