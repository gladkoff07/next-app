import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { productsType } from '../../types'
import Head from 'next/head'
import Heading from '../../components/heading'
import { useRouter } from 'next/router'
import ErrorComponent from '../../components/404'

type productTypeProps = {
  product: productsType
}

const Product: FC<productTypeProps> = ({ product }) => {
  const router = useRouter()

  if (!router.isFallback && !product?.id) {
    return <ErrorComponent />
  }

  return (
    <>
      <Head>
        <title>Товар - {product.title}</title>
      </Head>
      <Heading text={product.title} />
      <div>
        <Image
          loader={() => product.image}
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
        />
      </div>
      <div className='mt-4 py-2 flex justify-between align-middle border-t-2 border-indigo-500'>
        <span className='font-medium'>Price: {product.price} $</span>
        <span>Category: {product.category}</span>
      </div>
      <div className='mt-2'>
        Rating: <span className='font-bold'>{product.rating.rate}</span> from
        <span> {product.rating.count}</span>
      </div>
      <p className='mt-2'>{product.description}</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params

  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: data,
    },
  }
}

export default Product
