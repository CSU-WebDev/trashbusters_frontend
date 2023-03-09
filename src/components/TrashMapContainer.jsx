import React from 'react'
import TrashMap from './TrashMap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TrashMapContainer() {
    return (
        <>
            <Container id='grid-container' fluid className="center mt-2 mb-2">
                <div className="box">
                <Row>
                    <Col><h3 id='trashmapcontainer' className="text-center"> Trash Map </h3></Col>
                </Row>
                <Row>
                    <Col ><div className="text-center center-component"><TrashMap /></div></Col>
                </Row>
                </div>
            </Container>
        </>
    )
}