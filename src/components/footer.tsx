import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col items-center justify-center bg-purp p-4 md:flex-row md:space-x-4'>
      <span className='text-sm opacity-50'>
        Made with ❤️ by{' '}
        <a className='underline' href='https://twitter.com/KolbySisk'>
          Kolby Sisk
        </a>
      </span>
      <span className='hidden text-sm opacity-50 md:block'>|</span>
      <span className='text-sm opacity-50'>
        Inspired by{' '}
        <a className='underline' href='https://monorepo.tools'>
          monorepo.tools
        </a>
      </span>
    </footer>
  )
}
