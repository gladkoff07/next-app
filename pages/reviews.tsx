import React, { FC } from 'react'
import { reviewsType } from '../types'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Heading from '../components/heading'

type reviewsTypeProps = {
  reviews: [reviewsType]
}

const Reviews: FC<reviewsTypeProps> = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Отзывы</title>
      </Head>
      <Heading text='Отзывы' />
      <div className='reviews'>
        {!!reviews &&
          reviews.map((item) => {
            return (
              <div key={item.id} className='review mb-2 p-2 shadow rounded-md'>
                <Link href={`/reviews/${item.id}`}>
                  <a className='font-bold mb-2'>{item.name}</a>
                </Link>
                <p>{`${item.body.slice(0, 40)} ...`}</p>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Reviews

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments?_limit=20'
  )
  const data = await response.json()

  return {
    props: {
      reviews: data,
    },
  }
}
