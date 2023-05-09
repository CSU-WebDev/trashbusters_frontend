import React from 'react'
import TrashMap from './TrashMap';
import { Container, Row, Col } from 'react-bootstrap'

export default function TrashMapContainer() {
    return (
        <Container id='trashmap-container' data-testid="trashmap-container" className="box">
                <Row>
                    <Col>
                        <h3 className="text-center">Trash Map</h3>
                    </Col>
                </Row>
                <Row>
                    <Col id='trashmap-container-col'>
                        <TrashMap />
                    </Col>
                </Row>
        </Container>
    )
}