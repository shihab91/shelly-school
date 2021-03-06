import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css'
import useCourse from '../../Hooks/useCourse';
const Courses = () => {
    const [courses] = useCourse()
    return (
        <div className="container">
            <div className="text-container">
                <h1>Our best <span>courses</span></h1>
            </div>
            <Row xs={1} sm={2} lg={4} className="g-4">
                {
                    courses.slice(0, 4).map(course =>
                        <Col>
                            <Card className="course-card tilt" >
                                <Card.Img className="course-img" variant="top" src={course.img} />
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
            <Link to="/courses">
                <button className="border rounded-pill mt-5 view-all-btn">view all<i className="fas ms-2 fs-4 fa-arrow-alt-circle-right "></i></button>
            </Link>
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