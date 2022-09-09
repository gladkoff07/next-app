import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import Heading from '../components/heading'

const ErrorComponent: FC = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className='text-center'>
      <Heading text='Ошибка, такой страницы нет!' />
      <p>Переходим на главную через 3 секунды...</p>
      <div>
        <Image src='/page-not-found.jpg' width={300} height={300} alt='error' />
      </div>
    </div>
  )
}

export default ErrorComponent
