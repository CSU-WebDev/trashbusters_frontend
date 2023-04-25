import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'

export default function Contact() {
    return (
        <Container id='contact-container' className='box'>
            <Row>
                <h3 className="text-center">Contact Us</h3>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Form id='form'>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" maxLength={50} className='form-input-bar'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" maxLength={50} className='form-input-bar'/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
