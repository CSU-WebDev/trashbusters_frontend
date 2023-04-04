import React from 'react'
import PrettyPic from './PrettyPic'
import UglyPic from './UglyPic'
import { Container, Row, Col } from 'react-bootstrap'

export default function Pics() {
    return (
        <>
        <Container id='pics-container' className='mt-4 mb-4'>
            <Row className="justify-content-center">
                <Col s={12} md={6} className="align-items-center"><PrettyPic /></Col>
                <Col s={12} md={6} className="align-items-center"><UglyPic /></Col>
            </Row>
        </Container>
        </>
    )
}

// Photo by <a href="https://unsplash.com/pt-br/@oceancleanupgroup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">OCG Saving The Ocean</a> on <a href="https://unsplash.com/s/photos/trash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
