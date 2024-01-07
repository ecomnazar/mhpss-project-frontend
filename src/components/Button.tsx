import clsx from 'clsx';
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
  disabled?: boolean;
}

const Button = ({ className, title, disabled = false }: Props) => {
  return (
    <button disabled={disabled} className={clsx('bg-primary/70 text-white py-2.5 px-4 rounded-md', className)}>{title}</button>
  )
}

export default Button