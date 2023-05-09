import React from 'react'
import Pics from './Pics'
import { Container, Row, Col } from 'react-bootstrap'

export default function Pitch() {
    return (
            <Container id='pitch-container' data-testid="pitch-container" fluid className="mt-5 box">
                    <Row>
                        <Col><h3 className="text-center">Which do you prefer???</h3></Col>
                    </Row>
                    <Row>
                        <Col ><Pics /></Col>
                    </Row>
            </Container>
    )
}
