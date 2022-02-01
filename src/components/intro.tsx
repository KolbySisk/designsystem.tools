import { FC } from 'react'
import Image from 'next/image'

import { Content } from '~/components/content'
import { intro } from '~/data'

export const Intro: FC = () => {
  return (
    <section className='space-y-16 overflow-hidden bg-purp py-16 md:space-y-32 md:py-32'>
      <div className='container relative'>
        <div className='flex justify-end'>
          <div className='md:absolute md:top-1/2 md:ml-8 md:-translate-y-1/2'>
            <div className='md:w-2/3 lg:w-1/2'>
              <Content title={intro[0].title}>
                <div className='space-y-4'>{intro[0].content}</div>
              </Content>
            </div>
          </div>
          <div className='pointer-events-none hidden md:-mr-40 md:block lg:mr-0'>
            <Image alt='' src='/intro-bg1.png' layout='fixed' width={847} height={608} quality={100} priority />
          </div>
        </div>
      </div>
      <div className='container relative'>
        <div className='flex'>
          <div className='flex justify-end md:absolute md:top-1/2 md:mr-8 md:-translate-y-1/2'>
            <div className='md:w-2/3 lg:w-1/2'>
              <Content title={intro[1].title}>
                <div className='space-y-4'>{intro[1].content}</div>
              </Content>
            </div>
          </div>
          <div className='hidden md:-ml-60 md:block lg:ml-0'>
            <Image alt='' src='/intro-bg2.png' layout='fixed' width={444} height={548} quality={100} priority />
          </div>
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='lg:w-2/3'>
          <Content title={intro[2].title}>
            <div className='space-y-4'>{intro[2].content}</div>
          </Content>
        </div>
      </div>
    </section>
  )
}
