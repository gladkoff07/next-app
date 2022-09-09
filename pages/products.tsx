import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { productsType } from '../types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Heading from '../components/heading'

type productsTypeProps = {
  products: [productsType]
}

const Products: FC<productsTypeProps> = ({ products }) => {
  console.log(products)
  return (
    <>
      <Head>
        <title>Товары</title>
      </Head>
      <Heading text='Товары' />
      <div className='grid grid-rows-5 auto-rows-fr grid-cols-4  gap-4'>
        {!!products &&
          products.map((item) => {
            return (
              <Link href={`/products/${item.id}`} key={item.id} className=''>
                <a className='bg-white p-4 rounded-md transition ease-in-out delay-300 drop-shadow-md hover:drop-shadow-lg'>
                  <div className='text-lg font-medium mb-2 h-14 overflow-hidden'>
                    {item.title}
                  </div>
                  <div className='flex justify-center align-middle h-[100px]'>
                    <Image
                      loader={() => item.image}
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.title}
                    />
                  </div>
                  <div className='mt-4 py-2 flex justify-between align-middle border-t-2 border-indigo-500'>
                    <span className='font-medium'>{item.price} $</span>
                    <span>{item.category}</span>
                  </div>
                </a>
              </Link>
            )
          })}
      </div>
    </>
  )
}

export default Products

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()

  return {
    props: {
      products: data,
    },
  }
}
