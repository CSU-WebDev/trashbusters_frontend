import React from 'react'
import TrashMap from './TrashMap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TrashMapContainer() {
    return (
        <>
            <Container id='grid-container' fluid class="center" className="mt-2 mb-2">
                <div class="box">
                <Row>
                    <Col><h3 class="text-center"> Trash Map </h3></Col>
                </Row>
                <Row>
                    <Col ><div class="text-center center-component"><TrashMap /></div></Col>
                </Row>
                </div>
            </Container>
        </>
    )
}