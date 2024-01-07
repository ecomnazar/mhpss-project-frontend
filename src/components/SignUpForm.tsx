import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
import { useModalStore } from '../stores/useModalStore'
import React from 'react';
import Select from './Select';
import { SubmitHandler, useForm } from 'react-hook-form';
import { regions } from '../lib/constants/regions';
import { genders } from '../lib/constants/genders';
import Input from './Input';

interface FormProps {
    fullname: string;
    email: string;
    password: string;
}

interface Props {
    onChangeForm: () => void;
}

const SignUpForm = ({ onChangeForm }: Props) => {
    const { register, handleSubmit } = useForm<FormProps>()
    const setIsModalActive = useModalStore((state) => state.setIsModalActive)
    const [region, setRegion] = React.useState('')
    const [gender, setGender] = React.useState('')
    const onSubmit: SubmitHandler<FormProps> = ({ fullname, email, password }) => {
        const data = {
            fullname,
            email,
            password,
            region,
            gender
        }
        console.log(data);
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-black font-[600] text-[18px]'>Sign up</h2>
                <button onClick={setIsModalActive}>
                    <AiOutlineClose size={20} />
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2 mt-6'>
                <Input register={register('fullname')} placeholder='Full name' />
                <Input register={register('email')} placeholder={'Email'} type='email' />
                <Input register={register('password')} placeholder={'Password'} type='password' />

                <Select active={region} setActive={setRegion} content={regions} defaultValue='Region' />
                <Select active={gender} setActive={setGender} content={genders} defaultValue='Gender' />

                <Button className="!bg-primary w-full !bg-opacity-50" title={"Sign up"} />
            </form>
            <button onClick={() => onChangeForm()} className='block mx-auto text-black mt-4 text-center text-[13px]'>Already have an account? <span className='text-primary'>Log in</span> </button>
        </>
    )
}

export default SignUpForm