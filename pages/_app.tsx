import React from 'react'
import { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../style/global.css'

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
