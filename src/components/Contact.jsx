import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
    return (
        <>
        <Container id='grid-container' fluid className="center mt-2 mb-2">
            <div className="box">
                <Row>
                    <Col><h3 className="text-center" id="contact">Contact Us</h3></Col>
                    </Row>
                    <Row>
                    <Col><p>For any questions or concerns you may have you may contact us here at:</p><p>Email: trashbusters@realemail.com</p>
                    <p>Phone: 101-001-1010</p><p>Or post a message to our github at: 'insert public release here'</p></Col>
                </Row>
            </div>
            </Container>

        </>
    )
}
