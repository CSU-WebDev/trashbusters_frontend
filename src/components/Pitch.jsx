import React from 'react'
import Pics from './Pics'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pitch() {
    return (
        <>
            <Container>
                <Row>
                    <Col>Which do you prefer?</Col>
                </Row>
                <Row>
                    <Col><Pics /></Col>
                </Row>
            </Container>
        </>
    )
}