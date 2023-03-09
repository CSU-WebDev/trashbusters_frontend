import React from 'react'
import Pics from './Pics'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pitch() {
    return (
        <>
            <Container id='grid-container' fluid className="center mt-2 mb-2">
                <div className="box">
                <Row>
                    <Col><h3 className="text-center"> Which do you prefer? </h3></Col>
                </Row>
                <Row>
                    <Col ><div className="text-center"><Pics /></div></Col>
                </Row>
                </div>
            </Container>
        </>
    )
}
