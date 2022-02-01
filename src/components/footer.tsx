import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className='flex items-center justify-center space-x-4 bg-purp p-4'>
      <span className='text-sm opacity-50'>
        Made with ❤️ by{' '}
        <a className='underline' href='https://twitter.com/KolbySisk'>
          Kolby Sisk
        </a>
      </span>
      <span className='text-sm opacity-50'>|</span>
      <span className='text-sm opacity-50'>
        Inspired by{' '}
        <a className='underline' href='https://monorepo.tools'>
          monorepo.tools
        </a>
      </span>
    </footer>
  )
}
