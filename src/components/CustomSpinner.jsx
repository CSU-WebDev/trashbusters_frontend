import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

export default function CustomSpinner(props) {
    return (
        <Col sm={12}>
        <div style={{
          zIndex: 1,
          position: "absolute",
        }}>
            <Spinner id='spinner' animation="border" variant="dark" />
        </div>
        </Col>
    )
}