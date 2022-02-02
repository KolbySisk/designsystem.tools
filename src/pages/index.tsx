import type { NextPage } from 'next'
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
          title: 'designsystems.tools',
          description:
            'This website aims to explain what design systems are, the advantages of building one, and the tools involved.',
          site_name: 'designsystems.tools',
        }}
        twitter={{
          handle: '@kolbysisk',
          site: '@kolbysisk',
          cardType: 'summary_large_image',
        }}
      />
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
