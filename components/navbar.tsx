import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
  { id: 1, name: 'Главная', href: '/' },
  { id: 3, name: 'Товары', href: '/products' },
  { id: 2, name: 'Отзывы', href: '/reviews' },
  { id: 4, name: 'О нас', href: '/about' },
]

const Navbar: FC = () => {
  const router = useRouter()

  return (
    <nav>
      {navigation.map(({ id, name, href }) => (
        <Link key={id} href={href}>
          <a
            className={`${
              router.pathname == href ? 'bg-gray-700 text-neutral-50' : ''
            } p-2 transition ease-in-out delay-300 hover:bg-gray-700 hover:text-neutral-50`}
          >
            {name}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
