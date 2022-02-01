import { FC, ReactNode } from 'react'

export const Content: FC<{ title: string; children: ReactNode }> = ({ title, children }) => {
  return (
    <article className='space-y-4 md:space-y-8'>
      <h1>{title}</h1>
      {children}
    </article>
  )
}
