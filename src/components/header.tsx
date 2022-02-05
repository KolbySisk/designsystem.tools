import { FC } from 'react'
import Image from 'next/image'

import { siteDescription } from '~/data'

export const Header: FC = () => {
  return (
    <header className='relative box-content overflow-hidden bg-dark py-16 sm:h-[793px] sm:pb-32 sm:pt-16'>
      <div className='absolute left-1/2 ml-[86px] hidden -translate-x-1/2 sm:block'>
        <Image alt='' src='/header-bg.png' layout='fixed' width={2135} height={793} quality={100} priority />
      </div>
      <div className='flex flex-col items-center sm:absolute sm:left-1/2 sm:mt-52 sm:-translate-x-1/2'>
        <div className='mb-2'>
          <Image
            alt='designsystem.tools logo'
            src='/logo.png'
            layout='fixed'
            width={105}
            height={76}
            quality={100}
            priority
          />
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-end'>
            <h1 className='text-4xl font-bold leading-8 sm:text-[5rem] sm:leading-[5rem]'>designsystem</h1>
            <span className='text-2xl text-gold sm:text-[2.5rem]'>.tools</span>
          </div>
          <p className='mt-8 w-4/5 border-l-4 border-gold p-4 text-lg sm:w-[500px] sm:text-xl'>{siteDescription}</p>
        </div>
      </div>
    </header>
  )
}
