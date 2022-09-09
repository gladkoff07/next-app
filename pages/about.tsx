import React, { FC } from 'react'
import Head from 'next/head'
import Heading from '../components/heading'

const About: FC = () => {
  return (
    <>
      <Head>
        <title>О нас</title>
      </Head>
      <Heading text='О нас' />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores odit
        voluptas laborum, ipsa sunt libero adipisci architecto quo. Accusantium
        voluptas fugiat eligendi quisquam accusamus sunt amet, fuga ea dolores
        similique.
      </p>
      <p>
        Voluptatem libero asperiores accusantium? Architecto culpa error eius
        temporibus aliquid sed, maiores eveniet repudiandae, pariatur aperiam
        amet mollitia quae porro quia! Tempora dicta commodi quia fugit
        similique, deserunt ea dolorem.
      </p>
      <p>
        Perferendis blanditiis porro excepturi dolor! Reiciendis aliquid ut
        nihil. Minima, ipsa a. Odio sed facere, ducimus expedita unde repellat.
        Consequatur officiis temporibus eum atque quasi, sequi cupiditate
        eveniet voluptas aspernatur.
      </p>
    </>
  )
}

export default About
