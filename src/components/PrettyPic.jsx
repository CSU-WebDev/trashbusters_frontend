import React from 'react'
import PrettyPicture from '../images/CleanBeach.jpg'
import Image from 'react-bootstrap/Image'

export default function PrettyPic() {
    return (
        <Image src={PrettyPicture} fluid />
    )
}