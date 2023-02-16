import React from 'react'
import Pics from './Pics'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pitch() {
    return (
        <>
            <Container fluid class="center" className="mt-2 mb-2">
                <div class="box">
                <Row>
                    <Col><h3 class="text-center"> Which do you prefer? </h3></Col>
                </Row>
                <Row>
                    <Col ><div class="text-center"><Pics /></div></Col>
                </Row>
                </div>
            </Container>
        </>
    )
}
