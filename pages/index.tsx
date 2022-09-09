import Head from 'next/head'
import Image from 'next/image'
import React, { FC } from 'react'
import Heading from '../components/heading'

const Index: FC = () => {
  return (
    <div className='text-center'>
      <Head>
        <title>Главная страница</title>
      </Head>
      <Heading text='Next.js Application' />
      <figure className='inline-flex shadow-lg rounded-xl'>
        <Image
          src='/next-js.png'
          width={730}
          height={487}
          alt='home images'
          className='rounded-xl'
        />
      </figure>
    </div>
  )
}

export default Index
