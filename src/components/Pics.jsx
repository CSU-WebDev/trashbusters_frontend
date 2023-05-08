import React from 'react'
import Pic from './Pic'
import { Container, Row, Col } from 'react-bootstrap'
import UglyPicture from '../images/litter-before.jpg'
import PrettyPicture from '../images/litter-after.jpg'

export default function Pics() {
    return (
        <Container id='pics-container' className='mt-4 mb-4'>
            <Row className="justify-content-center">
                <Col s={12} md={6} className="align-items-center">
                    <Pic src={UglyPicture} />
                </Col>
                <Col s={12} md={6} className="align-items-center">
                    <Pic src={PrettyPicture} />
                </Col>
            </Row>
        </Container>
    )
}

// Photo by <a href="https://unsplash.com/pt-br/@oceancleanupgroup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">OCG Saving The Ocean</a> on <a href="https://unsplash.com/s/photos/trash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
