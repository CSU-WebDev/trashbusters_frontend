import React from 'react'
import Image from 'react-bootstrap/Image'

export default function UglyPic(props) {
    return (
        <Image  className='pic' src={props.src} fluid/>
    )
}
