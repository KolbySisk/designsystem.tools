import { FC } from 'react'
import Image from 'next/image'

import { siteDescription } from '~/data'

export const Header: FC = () => {
  return (
    <header className='relative box-content overflow-hidden bg-dark pb-32 pt-16' style={{ height: 793 }}>
      <div className='absolute left-1/2 -translate-x-1/2' style={{ marginLeft: 86 }}>
        <Image alt='' src='/header-bg.png' layout='fixed' width={2135} height={793} quality={100} priority />
      </div>
      <div className='absolute left-1/2 mt-72 flex -translate-x-1/2 flex-col items-end'>
        <div className='flex flex-col items-end'>
          <h1 className='font-bold' style={{ fontSize: 80, lineHeight: '80px' }}>
            designsystem
          </h1>
          <span className='text-gold' style={{ fontSize: 40 }}>
            .tools
          </span>
        </div>
        <p className='mt-8 border-l-4 border-gold p-4 text-xl' style={{ width: 500 }}>
          {siteDescription}
        </p>
      </div>
    </header>
  )
}
