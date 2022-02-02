import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactNode
  link: string
  variant?: 'normal' | 'small-n-light'
  openLinkNewTab?: boolean
  children: ReactNode
}

export const IconButton: FC<ButtonProps> = ({
  icon,
  link,
  variant = 'normal',
  openLinkNewTab = false,
  children,
  ...props
}) => {
  return (
    <a
      className={`flex items-center rounded-md p-3 text-dark no-underline ${
        variant === 'normal' ? 'bg-gold hover:bg-yellow' : 'bg-light hover:bg-yellow'
      }`}
      {...props}
      href={link}
      target={openLinkNewTab ? '_blank' : '_self'}
      rel='noreferrer'
    >
      <div className={`flex w-10 items-center justify-center text-2xl ${variant === 'normal' ? 'h-10' : 'h-8'}`}>
        {icon}
      </div>
      <span className={`mt-1 font-medium ${variant === 'normal' ? 'text-xl' : 'text-lg'}`}>{children}</span>
    </a>
  )
}
