import clsx from 'clsx';
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';


interface Props extends React.HTMLAttributes<HTMLInputElement> {
    placeholder: string;
    className?: string;
    register: UseFormRegisterReturn<string>;
    type?: 'text' | 'email' | 'password';
    errorType?: string | null;
}

const Input = ({ placeholder, className, register, type = 'text', errorType, ...props }: Props) => {
    return (
        <>
            <input type={type} {...props} {...register} className={clsx('border border-[#EDEDED] !text-black placeholder:text-black/50 w-full p-2.5 text-sm rounded-md', className, {
                ['!outline-red-500 border-red-500 outline-0']: errorType
            })} placeholder={placeholder} />
            {/* {errorType && <p className='text-[12px] text-red-600'>Required field</p>} */}
        </>
    )
}

export default Input