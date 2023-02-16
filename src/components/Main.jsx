import React from 'react'
import Pitch from './Pitch'
import About from './About'
import TrashMap from './TrashMap'
import Contact from './Contact'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Main() {
    return (
        <div class="wrapper">
            <Container fluid class="center">
                <Row>
                    <Col sm={1}></Col>
                    <Col>
            <Pitch />
            <About />
            <TrashMap />
            <Contact />
            <Footer />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
    );
}
