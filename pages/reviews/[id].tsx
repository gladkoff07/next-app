import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { FC } from 'react'
import Heading from '../../components/heading'
import Error from 'next/error'
import { reviewsType } from '../../types'
import { useRouter } from 'next/router'
import ErrorComponent from '../../components/404'

type reviewTypeProps = {
  review: reviewsType
}

const User: FC<reviewTypeProps> = ({ review }) => {
  const router = useRouter()

  if (!router.isFallback && !review?.id) {
    return <ErrorComponent />
  }

  return (
    <>
      <Head>
        <title>Отзыв {review.email}</title>
      </Head>
      <Heading text={review.email} />
      <hr />
      <p className='mt-2 font-bold text-2xl'>{review.name}</p>
      <p>{review.body}</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  )
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      review: data,
    },
  }
}

export default User
