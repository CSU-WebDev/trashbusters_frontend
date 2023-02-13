import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TrashMap() {
    return (
        <>
        <Container fluid class="center" className="mt-2 mb-2">
        <div class="box">
                <Row>
                    <Col><h3 class="text-center" id="trashmap">Trash Map</h3></Col>
                </Row>
                </div>
            </Container>
        </>
    )
}