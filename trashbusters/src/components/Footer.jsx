import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <p className='mb-1'>Copyright &copy; {currentYear}</p>
            <p> Footer</p>
        </>
    )
}