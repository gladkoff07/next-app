import Image from 'next/image'
import React, { FC } from 'react'
import Navbar from './navbar'

const Header: FC = () => {
  return (
    <header className='pt-4 pb-4 shadow'>
      <div className='container max-w-[1280px] mx-auto px-4 flex align-middle justify-between'>
        <div>
          <Image src='/vercel.svg' width={140} height={32} alt='logo' />
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
