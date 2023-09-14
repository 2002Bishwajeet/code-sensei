import React from 'react'
import Image from 'next/image'
import logo from '../../public/horizontal_text_logo_nobg.png'

const header = () => {
  return (
    <div>
        <h1 className='text-white'>Hello</h1>
        <Image 
            src={logo}
            alt='logo'
        />
    </div>
  )
}

export default header