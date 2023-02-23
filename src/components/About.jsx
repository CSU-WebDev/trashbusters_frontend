import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <>
        <Container fluid class="center" className="mt-2 mb-2">
        <div class="box">
                <Row>
                    <Col><h3 class="text-center" id="about">About</h3></Col>
                    </Row>
                    <Row>
                    <Col><p>Below is our handy dandy trash map! You can use it to mark areas on the map where you have spotted litter. 
                        You can also check for areas that have already been mark and send a message that the area has been cleaned.</p></Col>
                </Row>
        </div>
            </Container>
        </>
    )
}
