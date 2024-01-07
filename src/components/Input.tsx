import clsx from 'clsx';
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';


interface Props extends React.HTMLAttributes<HTMLInputElement> {
    placeholder: string;
    className?: string;
    register: UseFormRegisterReturn<string>;
    type?: 'text' | 'email' | 'password';
}

const Input = ({ placeholder, className, register, type = 'text' }: Props) => {
    return (
        <input type={type}  {...register} className={clsx('border border-[#EDEDED] !text-black placeholder:text-black/50 w-full p-2.5 text-sm rounded-md', className)} placeholder={placeholder} />
    )
}

export default Input