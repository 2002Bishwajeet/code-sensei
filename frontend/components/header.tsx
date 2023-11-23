import Image from 'next/image'
import logo from '../public/horizontal_text_logo_nobg.png'

const Header = () => {
  return (
    <div className='px-32 py-14'>
        <Image 
            src={logo}
            alt='logo'
            width={350}
            height={150}
        />
    </div>
  )
}

export default Header