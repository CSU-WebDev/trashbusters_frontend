import React from 'react'
import PrettyPicture from '../images/litter-after.jpg'
import Image from 'react-bootstrap/Image'

export default function PrettyPic() {
    return (
        <Image className="text-center" src={PrettyPicture} fluid />
    )
}
