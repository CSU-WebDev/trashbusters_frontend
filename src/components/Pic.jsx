import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Pic(props) {
    return (
        <Image  className='pic' data-testid='pic' src={props.src} fluid/>
    )
}
