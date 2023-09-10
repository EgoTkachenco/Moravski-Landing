'use client'
import '@/styles/index.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLang } from '@/locales'
import { useEffect } from 'react'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'

export default function RootLayout({ children }) {
  const { lang } = useLang()

  useEffect(() => {
    if (process.browser) AOS.init()
  }, [])
  return (
    <html lang={lang}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <MantineProvider
        theme={{
          colorScheme: 'light',
        }}
      >
        <body>{children}</body>
      </MantineProvider>
    </html>
  )
}
