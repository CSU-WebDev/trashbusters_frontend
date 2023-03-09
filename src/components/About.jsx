import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <>
        <Container id='grid-container' fluid className="center mt-2 mb-2">
        <div className="box">
                <Row>
                    <Col><h3 className="text-center" id="about">About</h3></Col>
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
