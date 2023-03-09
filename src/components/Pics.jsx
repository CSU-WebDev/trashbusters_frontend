import React from 'react'
import PrettyPic from './PrettyPic'
import UglyPic from './UglyPic'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pics() {
    return (
        <>
            <Container id='grid-container' fluid className="center" >
                <Row>
                    <Col className="text-center"><PrettyPic /></Col>
                    <Col className="text-center"><UglyPic /></Col>
                </Row>
            </Container>
        </>
    )
}

// Photo by <a href="https://unsplash.com/pt-br/@oceancleanupgroup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">OCG Saving The Ocean</a> on <a href="https://unsplash.com/s/photos/trash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
