import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export default function Toaster(props) {
    const [show, setShow] = useState(true);
    useEffect(() => {
        setShow( props.apiStatus === "ERROR" ? true : false)
    },[props.apiStatus])
    if (props.apiStatus === 'ERROR') {
        return (
        <Row data-testid='toaster-container'>
            <Col md={6} className="mb-2">
            <Toast 
                data-testid='toaster'
                show={show} 
                onClose={() => {
                    props.setApiStatus(null) 
                    setShow(false)}
                }>
                <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{props.apiMessage}</Toast.Body>
            </Toast>
            </Col>
        </Row>
        )
    }
    return null

}