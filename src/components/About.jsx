import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
    return (
        <>
        <Container fluid id='about-container' className="box">
                <Row>
                    <Col>
                        <h3 className="text-center">About</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p id='about-paragraph' data-testid='about-paragraph'>Litter is <i>never</i> fun to look at. Join the fight and help bust some trash! Below is our 
                            trash map. You can use it to mark areas on the map where you have spotted litter. Be 
                            sure to add a description if you drop a new pin! You can also delete pins to cleanup 
                            sites once all trash has been removed. Thank you for making our community more beautiful!
                        </p>
                    </Col>
                </Row>
        </Container>
        </>
    )
}
