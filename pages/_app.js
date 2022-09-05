import { useEffect } from 'react'
import '../styles/globals.css'
import Script from 'next/head'
import Layout from '../layout/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src='./../scripts/custom.js' async></Script>
    </Layout>
  )
}

export default MyApp
