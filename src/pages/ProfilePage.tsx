import React from 'react'
import Header from '../sections/Header'
import { getUserEmail, getUserFullname, removeUser } from '../lib/userData'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import toast, { Toaster } from 'react-hot-toast';

interface FormProps {
    fullname: string;
    email: string;
}

const ProfilePage = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormProps>()
    const fullname = getUserFullname()
    const email = getUserEmail()
    const navigate = useNavigate()

    const onLogout = () => {
        removeUser()
        navigate('/')
    }

    const onSubmit: SubmitHandler<FormProps> = ({ fullname, email }) => {
        console.log(fullname, email);
    }

    React.useEffect(() => {
        const defaultValues = {
            fullname: fullname || '',
            email: email || ''
        }
        reset(defaultValues)
    }, [])


    if (!fullname) {
        navigate('/')
    }
    return (
        <section className='container mx-auto px-4'>
            <Toaster />
            <Header />
            <form className='max-w-md mx-auto flex flex-col gap-y-4' onSubmit={handleSubmit(onLogout)}>
                <Input register={register('fullname', { required: true })} placeholder='Full name' errorType={errors.fullname?.type} />
                <Input register={register('email', { required: true })} placeholder='Full name' errorType={errors.email?.type} />
                <div className='flex items-center gap-x-2'>
                    <Button className='w-full' onClick={onLogout} title={'Update'} />
                    <Button className='w-full bg-red-600' onClick={onLogout} title={'Log out'} />
                </div>
            </form>
        </section>
    )
}

export default ProfilePage