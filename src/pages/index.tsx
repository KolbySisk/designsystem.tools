import type { NextPage } from 'next'

import { Features } from '~/components/features'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Intro } from '~/components/intro'

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Features />
      <Footer />
    </main>
  )
}

export default Home
