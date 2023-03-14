import React from 'react'
import Pitch from './Pitch'
import About from './About'
import TrashMapContainer from './TrashMapContainer'
import Contact from './Contact'
import { Container, Row, Col } from 'react-bootstrap'

export default function Main() {
    return (
        <Container id="main" fluid>
            <Row>
                <Col>
                    <Pitch />
                    <About />
                    <TrashMapContainer />
                    <Contact />
                </Col>
            </Row>
        </Container>
    );
}
