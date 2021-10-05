import React from 'react';
import { Card, Col, NavLink, Row } from 'react-bootstrap';
import useTeachers from '../../Hooks/useTeachers';
const AllTeachers = () => {
    const [teachers] = useTeachers();
    return (
        <div className="container">
            <h1>Check out our best <span>Teachers</span></h1>
            <Row xs={2} md={4} className="g-4">
                {
                    teachers.map((teacher) =>
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

        </div>
    );
};

export default AllTeachers;