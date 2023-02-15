import React from 'react'
import UglyPicture from '../images/DirtyBeach.jpg'
import Image from 'react-bootstrap/Image'

export default function UglyPic() {
    return (
        <Image src={UglyPicture} fluid />
    )
}