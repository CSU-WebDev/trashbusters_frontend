import React from 'react'
import Pitch from './Pitch'
import About from './About'
import TrashMapContainer from './TrashMapContainer'
import Contact from './Contact'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Main() {
    return (
        <div className="wrapper">
            <Container fluid className="center">
                <Row>
                    <Col sm={1}></Col>
                    <Col>
                        <Pitch />
                        <About />
                        <TrashMapContainer />
                        <Contact />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
    );
}
