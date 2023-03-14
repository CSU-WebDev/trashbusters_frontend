import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentMonthNum = new Date().getMonth();
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  const currentMonth = months[currentMonthNum]
  return (
    <footer id='footer'>
      <Container>
        <Row>
          <Col>
            <p>Trashbusters &copy; {currentMonth} {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
