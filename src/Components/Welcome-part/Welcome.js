import React, { useEffect, useState } from 'react';
import './Welcome.css'
import { Card, Col, Row } from 'react-bootstrap';
const Welcome = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('./Welcome.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="welcome container">
            <h2>Welcome to <span>Shelly</span></h2>
            <p>Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus interdum, mauris quis cursus sodales, urn
            </p>
            <Row xs={1} sm={2} lg={4} className="g-4  ">
                {
                    cards.map(card =>
                        <Col className="d-flex justify-content-center" >
                            <Card className="mt-5 border-0 welcome-card" style={{ width: '262px', height: '166px' }}>
                                <Card.Img src={card.img} style={{ width: '50px' }}></Card.Img>
                                <Card.Body className='info'>
                                    <Card.Title className="title">{card.name}</Card.Title>
                                    <p>{card.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Welcome;