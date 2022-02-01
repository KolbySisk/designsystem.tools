import { FC } from 'react'
import Image from 'next/image'

import { Content } from '~/components/content'
import { intro } from '~/data'

export const Intro: FC = () => {
  return (
    <section className='space-y-32 bg-purp py-32'>
      <div className='container relative'>
        <div className='flex justify-end'>
          <div className='absolute top-1/2 -translate-y-1/2'>
            <div className='w-1/2'>
              <Content title={intro[0].title}>
                <div className='space-y-4'>{intro[0].content}</div>
              </Content>
            </div>
          </div>
          <Image alt='' src='/intro-bg1.png' layout='fixed' width={847} height={608} quality={100} priority />
        </div>
      </div>
      <div className='container relative'>
        <div className='flex'>
          <div className='absolute top-1/2 flex -translate-y-1/2 justify-end'>
            <div className='w-1/2'>
              <Content title={intro[1].title}>
                <div className='space-y-4'>{intro[1].content}</div>
              </Content>
            </div>
          </div>
          <Image alt='' src='/intro-bg2.png' layout='fixed' width={444} height={548} quality={100} priority />
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='w-2/3'>
          <Content title={intro[2].title}>
            <div className='space-y-4'>{intro[2].content}</div>
          </Content>
        </div>
      </div>
    </section>
  )
}
