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
        toast.success('Logged out successfully')
        setTimeout(() => {
            navigate('/')
        }, 1000);
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
        <section>
            <Toaster />
            <Header />
            <form onSubmit={handleSubmit(onLogout)}>
                <Input register={register('fullname', { required: true })} placeholder='Full name' errorType={errors.fullname?.type} />
                <Input register={register('email', { required: true })} placeholder='Full name' errorType={errors.email?.type} />
            </form>
            <Button onClick={onLogout} title={'Log out'} />
        </section>
    )
}

export default ProfilePage