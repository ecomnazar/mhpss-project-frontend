import clsx from 'clsx';
import { HTMLAttributes } from 'react'
import { RotatingLines } from 'react-loader-spinner';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ className, title, disabled = false, isLoading = false }: Props) => {
  return (
    <button disabled={disabled || isLoading} className={clsx('relative bg-primary/70 text-white h-[44px] px-4 rounded-md', className, {
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