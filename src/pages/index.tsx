import type { NextPage } from 'next'
import Script from 'next/script'
import { NextSeo } from 'next-seo'

import { Features } from '~/components/features'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Intro } from '~/components/intro'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Design Systems Demystified'
        description='This website aims to explain what design systems are, the advantages of building one, and the tools involved.'
        openGraph={{
          url: 'https://designsystem.tools/',
          title: 'designsystem.tools',
          description:
            'This website aims to explain what design systems are, the advantages of building one, and the tools involved.',
          site_name: 'designsystem.tools',
          images: [
            {
              url: 'https://designsystem.tools/og-designsystemtools.jpg',
              width: 1200,
              height: 630,
              alt: 'Everything you need to know about design systems, and the tools to build them.',
              type: 'image/jpg',
            },
            {
              url: 'https://designsystem.tools/og-designsystemtools-2.jpg',
              width: 800,
              height: 600,
              alt: 'Everything you need to know about design systems, and the tools to build them.',
              type: 'image/jpg',
            },
            {
              url: 'https://designsystem.tools/og-designsystemtools-3.jpg',
              width: 1200,
              height: 1200,
              alt: 'Everything you need to know about design systems, and the tools to build them.',
              type: 'image/jpg',
            },
          ],
        }}
        twitter={{
          handle: '@kolbysisk',
          site: '@kolbysisk',
          cardType: 'summary_large_image',
        }}
      />
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-013R48ZCGQ' strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-013R48ZCGQ');
        `}
      </Script>
      <main>
        <Header />
        <Intro />
        <Features />
        <Footer />
      </main>
    </>
  )
}

export default Home
