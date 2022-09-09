import React, { FC, ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

type layoutProps = {
  children: ReactNode
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='pt-4 pb-4'>
        <div className='container max-w-[1280px] mx-auto px-4'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
