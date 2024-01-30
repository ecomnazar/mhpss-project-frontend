import clsx from 'clsx';
import { HTMLAttributes } from 'react'
import { RotatingLines } from 'react-loader-spinner';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string | any;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit';
}

const Button = ({ className, title, disabled = false, isLoading = false, type = 'submit', ...props }: Props) => {
  return (
    <button type={type} {...props} disabled={disabled || isLoading} className={clsx('relative bg-primary/70 text-white h-[44px] px-4 flex items-center justify-center rounded-md', className, {
      ['!bg-opacity-70']: disabled || isLoading
    })}>
      {isLoading ? <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><RotatingLines
        width="20"
        strokeColor='#fff'
        strokeWidth="5"
      /></div> : title}
    </button>
  )
}

export default Button