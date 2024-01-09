import React from 'react';
import toast from 'react-hot-toast';
import { AiOutlineClose } from 'react-icons/ai'
import { SubmitHandler, useForm } from 'react-hook-form';
import { regions } from '../lib/constants/regions';
import { genders } from '../lib/constants/genders';
import { useUserStore } from '../stores/useUserStore';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import { getUserEmail, getUserFullname, getUserGender, getUserId, getUserRegion } from '../lib/userData';

interface FormProps {
    fullname: string;
    email: string;
    password: string;
}

const EditProfileForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormProps>()
    const setIsEditModalActive = useUserStore((state) => state.setIsEditModalActive)
    const editUserApi = useUserStore((state) => state.editUserApi)
    const isLoading = useUserStore((state) => state.editLoading)
    const [region, setRegion] = React.useState('')
    const [gender, setGender] = React.useState('')

    const fullname = getUserFullname()
    const email = getUserEmail()

    const onSubmit: SubmitHandler<FormProps> = async ({ fullname, email }) => {
        const data = {
            fullname,
            email,
            region,
            gender,
            id: getUserId()!
        }
        editUserApi(data)
    }

    React.useEffect(() => {
        const defaultValues = {
            fullname: fullname || '',
            email: email || '',
        }
        setRegion(getUserRegion() || '')
        setGender(getUserGender() || '')
        reset(defaultValues)
    }, [isLoading])

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-black font-[600] text-[18px]'>Edit profile</h2>
                <button onClick={setIsEditModalActive}>
                    <AiOutlineClose size={20} />
                </button>
            </div>
            <form className='flex flex-col gap-y-2 mt-6'>
                <Input register={register('fullname', { required: true })} placeholder='Full name' errorType={errors.fullname?.type} />
                <Input register={register('email', { required: true })} placeholder={'Email'} type='email' errorType={errors.email?.type} />
                <Select active={region} setActive={setRegion} content={regions} defaultValue='Region' />
                <Select active={gender} setActive={setGender} content={genders} defaultValue='Gender' />
                <Button onClick={handleSubmit(onSubmit)} isLoading={isLoading} className="!bg-primary w-full mt-2" title={"Edit"} />
            </form>
        </>
    )
}

export default EditProfileForm