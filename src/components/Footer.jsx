import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  const currentDate = new Date().toLocaleString('default', { month: 'long', year: "numeric" });

  return (
    <footer id='footer'>
      <Container>
        <Row>
          <Col>
            <p>Trashbusters &copy; {currentDate} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
