import React from 'react'
import UglyPicture from '../images/litter-before.jpg'
import Image from 'react-bootstrap/Image'

export default function UglyPic() {
    return (
        <Image className="text-center" src={UglyPicture} fluid />
    )
}
