import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <p className='mb-1'>Copyright &copy; {currentYear}</p>
            <p> Footer</p>
        </>
    )
}