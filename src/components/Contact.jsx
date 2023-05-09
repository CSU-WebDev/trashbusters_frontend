import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'

export default function Contact() {
    return (
        <Container id='contact-container' data-testid="contact-container" className='box'>
            <Row>
                <h3 className="text-center">Contact Us</h3>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Form id='form' data-testid="form" action="https://formspree.io/f/xyyaglza" method="POST">
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label className='mb-2'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicName" className="mb-3">
                            <Form.Label className='mb-2'>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" name="name" required data-testid="name-input"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage" className="mb-3">
                            <Form.Label className='mb-2'>Message</Form.Label>
                            <Form.Control type="textarea" rows="3" placeholder="Enter your message" name="message" required data-testid="message-input"/>
                        </Form.Group>

                        <Button className="btn-lg" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
